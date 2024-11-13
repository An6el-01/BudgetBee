import React, { useContext} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { SavingsGoals } from '../../types/types';
import { SQLiteContext } from '../../App';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

const colors = {
    primary: '#FCB900',
    secondary: '#F9A800',
    text: '#212121',
    background: '#F5F5F5',
};

const styles = StyleSheet.create({
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
        borderRadius: 5,
    },
});

export default function DepositGoal({ goal, loadGoals, setShowDepositGoal }: { goal: SavingsGoals, loadGoals: () => Promise<void>, setShowDepositGoal: React.Dispatch<React.SetStateAction<SavingsGoals | null>> }) {
    const [depositAmount, setDepositAmount] = React.useState<string>('');
    const db = useContext(SQLiteContext);

    const handleDeposit = async () => {
        const amount = parseFloat(depositAmount);
        if (!isNaN(amount) && amount > 0) {
            try {
                await depositGoal(goal, amount);
                await loadGoals();
                setShowDepositGoal(null);
            } catch (error) {
                console.error("Error during deposit:", error);
            }
        }
    };

    const depositGoal = async (goal: SavingsGoals, amount: number) => {
        const date = new Date().getTime();
        try {    
            if(!db) return;
            const updateResult = await db.runAsync(
                'UPDATE SavingsGoals SET progress = progress + ? WHERE id = ?;',
                [amount, goal.id]
            );    

            // SORT THIS FOR NOTIFICATION FOR CONTRIBUTIONS ON DEPOSITING TO PENDING GOALS
            const insertResult = await db.runAsync(
                'INSERT INTO Contributions (goal_id, amount, date) VALUES (?, ?, ?);',
                [goal.id, amount, date]
            );
            await AsyncStorage.setItem(`lastContribution_${goal.id}`, date.toString());

            // Schedule a notification after 7 days (7 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
            const sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000;
            setTimeout(async () => {
                const lastContribution = await AsyncStorage.getItem(`lastContribution_${goal.id}`);
                const isGoalNotificationsEnabled = await AsyncStorage.getItem('goalNotificationsEnabled');
                if (isGoalNotificationsEnabled === 'true' && lastContribution && parseInt(lastContribution) === date) {
                    await sendNotification(goal.name);
                }
            }, sevenDaysInMillis); // 7 days for the actual notification
    
            await logContributions(goal.id);
        } catch (error) {
            console.error("Error during deposit or logging contributions:", error);
        }
    };
    
    //SORT THIS FOR NOTIFICATIONS ON CONTRIBUTING TO PENDING GOALS
    const logContributions = async (goalId: number) => {
        try {
            if( !db) return;
            const contributions = await db.getAllAsync<{ id: number; goal_id: number; amount: number; date: number }>(
                'SELECT * FROM Contributions WHERE goal_id = ?;',
                [goalId]
            );
            if (contributions.length > 0) {
            } else {
                console.log(`No contributions found for Goal ID ${goalId}`);
            }
        } catch (error) {
            console.error("Error logging contributions:", error);
        }
    };
    // SORT THIS FOR NOTIFICATIONS ON CONTRIBUTING TO PENDING GOALS
    const sendNotification = async (goalName: string) => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Reminder",
                body: `It's been a week since your last deposit for the goal "${goalName}". Keep going!`,
            },
            trigger: null,
        });
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Deposit To Goal"
                value={depositAmount}
                onChangeText={setDepositAmount}
                keyboardType='numeric'
            />
            <Button title="Deposit" onPress={handleDeposit} />
            <Button title="Cancel" onPress={() => setShowDepositGoal(null)} color="red" />
        </View>
    );
}
