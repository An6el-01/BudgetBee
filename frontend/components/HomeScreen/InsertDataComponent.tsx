import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { useSQLiteContext } from 'expo-sqlite/next';
import csv from 'csvtojson';

// Explicitly require each file statically
const tableToFileMap = {
  AIRecommendations: Asset.fromModule(require('../../assets/MockData/AIRecommendations.csv')),
  Budgets: Asset.fromModule(require('../../assets/MockData/Budgets.csv')),
  CryptoPortfolios: Asset.fromModule(require('../../assets/MockData/CryptoPortfolios.csv')),
  Currencies: Asset.fromModule(require('../../assets/MockData/Currencies.csv')),
  CurrencyExchangeHistory: Asset.fromModule(require('../../assets/MockData/CurrencyExchangeHistory.csv')),
  FinancialForecasts: Asset.fromModule(require('../../assets/MockData/FinancialForecasts.csv')),
  Investments: Asset.fromModule(require('../../assets/MockData/Investments.csv')),
  Notifications: Asset.fromModule(require('../../assets/MockData/Notifications.csv')),
  SavingsGoals: Asset.fromModule(require('../../assets/MockData/SavingsGoals.csv')),
  Transactions: Asset.fromModule(require('../../assets/MockData/Transactions.csv')),
};

const InsertDataComponent = () => {
  const db = useSQLiteContext();

  // Function to insert data from CSV files into designated tables
  const insertData = async () => {
    try {
      for (const [table, asset] of Object.entries(tableToFileMap)) {
        await asset.downloadAsync(); // Download asset to ensure it’s available
        const fileUri = asset.localUri;

        if (!fileUri) {
          console.warn(`File not found for asset: ${table}`);
          continue;
        }

        // Read and parse CSV content to JSON
        const fileContent = await FileSystem.readAsStringAsync(fileUri);
        const jsonData = await csv().fromString(fileContent);

        // Insert each record into the database
        for (const item of jsonData) {
          const columns = Object.keys(item).join(", ");
          const placeholders = Object.keys(item).map(() => "?").join(", ");
          const values = Object.values(item) as any[]; // Type assertion to avoid type errors

          await db.runAsync(
            `INSERT INTO ${table} (${columns}) VALUES (${placeholders});`,
            values
          );
        }
      }

      Alert.alert("Success", "Data inserted successfully!");
    } catch (error) {
      console.error("Data insertion failed:", error);
      Alert.alert("Error", "Failed to insert data. Please check the logs for details.");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Insert Data" onPress={insertData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default InsertDataComponent;
