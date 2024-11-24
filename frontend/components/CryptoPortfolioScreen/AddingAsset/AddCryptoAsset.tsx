import React, {useState, useEffect, useContext} from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Alert} from 'react-native'; 
import { SQLiteContext } from '../../../App';
import { CryptoPortfolios } from '../../../types/types';
import { fetchCoins } from '../../../API/cryptoService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/navigationTypes';

interface AddCryptoAssetProps {
    navigation: NavigationProp<RootStackParamList, 'AddCryptoAsset'>
}

interface Coin {
    id: string;
    name: string;
    symbol: string;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
        marginBottom: 16,
    },
    coinItem:{
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    selected: {
        backgroundColor: '#d3f3d3'
    },
    coinName: {
        fontSize: 16,
    },
    amountContainer: {
        marginTop: 16
    },
    saveButton: {
        backgroundColor: '#27a745',
        padding: 12,
        borderRadius: 5,
        marginTop: 8
    },
    saveText:{
        color: 'white',
        textAlign:"center"
    },
})

export default function AddCryptoAsset({ navigation }: AddCryptoAssetProps){
    const [coins, setCoins] = useState<Coin[]>([]);
    const [searchQuery, setSearchQuery] =  useState('');
    const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
    const [amount, setAmount] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');
    const db = useContext(SQLiteContext);

    useEffect(() => {
        fetchCoins()
        .then(data => setCoins(data))
        .catch(err => console.error("Error Fetching coins ([useEffect]AddCryptoAsset.tsx):", err));
    }, []);

    const filteredCoins = coins.filter((coin: any) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchQuery.toLowerCase)
    );

    const handleSave = async () => {
        const storedUserId =  await AsyncStorage.getItem('userId');
        if(!storedUserId){
            Alert.alert('Error', 'You must be logged in to add a crypto asset');
            return;
        }
        if(!selectedCoin || !amount || !purchasePrice) {
            Alert.alert('Error', 'Please select a coin and enter an amount');
            return;
        }

        try{
            const portfolioEntry: CryptoPortfolios = {
                id:0,
                user_id: Number(storedUserId),
                crypto_name: selectedCoin.name,
                amount_held:parseFloat(amount),
                current_value: 0, //implement a function for this later
                last_updated: Date.now(),
                purchase_price: parseFloat(purchasePrice),
            };

            if(!db) return
            await db.runAsync(
                `INSERT INTO CryptoPortfolios (user_id, crypto_name, amount_held, purchase_price, current_value, last_updated)
         VALUES (?, ?, ?, ?, ?)`,
         [portfolioEntry.user_id, portfolioEntry.crypto_name, portfolioEntry.amount_held, portfolioEntry.current_value, portfolioEntry.purchase_price, portfolioEntry.last_updated]
            );
            Alert.alert('Success', `Crypto asset: ${portfolioEntry.crypto_name} added successfully`);
            navigation.navigate('CryptoPortfolio');

        }catch (error){
            console.error("Error saving crypto asset ([handleSave Function]AddCryptoAsset.tsx):", error);
            Alert.alert('Error', 'Failed to save the crypto asset.')
        }
    };

    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Search for a coin"
            value={searchQuery}
            onChangeText={setSearchQuery}
            />

            <FlatList
            data={filteredCoins}
            keyExtractor={ (item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                style={[styles.coinItem, selectedCoin?.id === item.id && styles.selected]}
                onPress={() => setSelectedCoin(item)}
                >
                    <Text style={styles.coinName}>{item.name} ({item.symbol.toUpperCase()})</Text>
                </TouchableOpacity>
            )}
            />

            {selectedCoin && (
                <View style={styles.amountContainer}>
                    <Text>Selected Coin: {selectedCoin.name}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter amount"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />
                      <TextInput
                        style={styles.input}
                        placeholder="Enter purchase price"
                        keyboardType="numeric"
                        value={purchasePrice}
                        onChangeText={setPurchasePrice} // Set purchase price
                    />
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.saveText}>Save Asset</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

