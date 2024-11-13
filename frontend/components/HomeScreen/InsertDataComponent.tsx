import React, {useContext} from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { SQLiteContext } from '../../App';
import { tableDataMap } from '../../database/mockData';
// Explicitly require each file statically

const InsertDataComponent = () => {
  const db = useContext(SQLiteContext);

  // Function to insert data from CSV files into designated tables
  const insertData = async () => {
    try {
      for (const [table, data] of Object.entries(tableDataMap)) {
        // Insert each record into the database
        for (const item of data) {
          const columns = Object.keys(item).join(", ");
          const placeholders = Object.keys(item).map(() => "?").join(", ");
          const values = Object.values(item) as any[]; // Type assertion to avoid type errors

          try {
            if(!db) return;
            await db.runAsync(
              `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`,
              values
            );
          } catch (error) {
            if (error instanceof Error) { // Narrow type to Error
              if (error.message.includes("UNIQUE constraint failed")) {
                console.warn(`Skipping duplicate entry in table ${table}:`, item);
              } else {
                throw error; // Rethrow if it's a different error
              }
            } else {
              console.error("An unknown error occurred:", error);
            }
          }
          
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
