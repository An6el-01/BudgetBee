import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import PortfolioValue from '../components/CryptoPortfolioScreen/PortfolioValue';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types/navigationTypes';
import CryptoReports from '../components/CryptoPortfolioScreen/CryptoReports';
import { CryptoAsset } from '../types/types';
import { useSQLiteContext } from 'expo-sqlite';
import { SQLiteContext } from '../App';

const colors = {
  primary: '#FCB900',
  secondary: '#F9A800',
  text: '#212121',
  background: '#F5F5F5',
  buttonBackground: '#007BFF',
  cardBackground: '#FFFFFF',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.text,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    marginBottom: 15,
    backgroundColor: colors.buttonBackground,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    padding: 20,
    backgroundColor: colors.cardBackground,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  settingsIcon: {
    alignItems: 'center',
    marginRight: 13,
  },
  settingsIconName: {
    marginTop: 3,
    fontSize: 12,
    color: '#212121',
  },
  assetItem: { 
    padding: 16, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc' 
  },
  addButton: { 
    padding: 12, 
    backgroundColor: '#28a745', 
    borderRadius: 5, 
    marginTop: 16 
  },
  addButtonText: { 
    color: 'white', 
    textAlign: 'center' 
  },
  assetName: {
    fontSize: 16,
  }
});

const CryptoPortfolio = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const db = useContext(SQLiteContext);
  const [portfolio, setPortfolio] = React.useState<CryptoAsset[]>([]);
  const [isLoading, setIsLoading] =  React.useState(true);

  React.useEffect(() => {
    fetchPortfolioData();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.settingsIcon}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name="settings-outline" size={24} color="black" />
          <Text style={styles.settingsIconName}>Settings</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const fetchPortfolioData = async () => {
    try{
      if (!db) return;
      const result = await db.getAllAsync<CryptoAsset>(
        `SELECT crypto_name, amount_held FROM CryptoPortfolios WHERE user_id = ?`,
        [1]
      );
      setPortfolio(result);
    }catch(error) {
      console.error('Error fetching portfolio data:', error);
    }finally {
      setIsLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Display total portfolio value */}
      <PortfolioValue  portfolio={portfolio}/>

      {/* Performance Report */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Crypto Performance Report</Text>
        <Button
          title="View Performance Report"
          onPress={() => navigation.navigate('CryptoReports')}
        />
      </View>

      {/* AI Recommendations */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>AI-Powered Recommendations</Text>
        <Button
          title="View AI Recommendations"
          onPress={() => navigation.navigate('CryptoAIRecommendations')}
        />
      </View>
      <FlatList
        data={portfolio}
        keyExtractor={(item) => item.id ? item.id.toString() : `${Math.random()}`}
        renderItem={({ item }) => (
          <View style={styles.assetItem}>
            <Text style={styles.assetName}>{item.crypto_name}</Text>
            <Text>Amount Held: {item.amount_held}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddCryptoAsset')}
      >
        <Text style={styles.addButtonText}>+ Add Asset</Text>
      </TouchableOpacity>
    </ScrollView>
    
  );
};

export default CryptoPortfolio;
