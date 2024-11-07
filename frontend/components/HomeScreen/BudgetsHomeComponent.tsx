import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigationTypes';
import ProgressBar from '../ui/ProgressBar';  // Assuming there's a ProgressBar component
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


// Define the interface for props
interface BudgetProgressProps {
  budgets: { category: number; spent: number; amount: number;}[];  // Adjust the type if needed
  categories: {id: number; name: string;}[];
}

const BudgetsHomeComponent: React.FC<BudgetProgressProps> = ({ budgets, categories }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const formatCurrency = (value: number | null) => `$${(value ?? 0).toFixed(2)}`;

  const getCategoryName = (categoryId: number) => {
    const category = categories.find(category => category.id === categoryId);
    return category ? category.name : 'Unknown Category';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Budgets</Text>

      {budgets.length === 0 ? (
        <Text style={styles.noBudgetsText}>No favorited budgets to display</Text>
      ) : (
        budgets.map((budget, index) => {
          const progressPercentage = budget.spent / budget.amount;

          return (
            <View key={index} style={styles.budgetCard}>
              <View style={styles.budgetRow}>
                <Text style={styles.budgetName}>{getCategoryName(budget.category)}</Text>
                <Text style={styles.budgetSpent}>
                  {formatCurrency(budget.spent)} / {formatCurrency(budget.amount)}
                </Text>
              </View>
              <ProgressBar progress={progressPercentage} />
            </View>
          );
        })
      )}

      {/* View All Goals Button - Displayed only once */}
      <TouchableOpacity onPress={() => navigation.navigate('Budgets')}>
        <LinearGradient
          colors={['#007BFF', '#00BFFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.viewAllButton}
        >
          <Ionicons name="arrow-forward-circle" size={20} color="white" />
          <Text style={styles.viewAllButtonText}>View All Budgets</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  budgetCard: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  budgetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  budgetName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  budgetSpent: {
    fontSize: 14,
    color: '#888',
  },
  noBudgetsText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
    textAlign: 'center',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 8,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  viewAllButtonText: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default BudgetsHomeComponent;
