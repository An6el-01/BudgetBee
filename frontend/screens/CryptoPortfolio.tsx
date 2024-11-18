import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image, Alert } from 'react-native';
import PortfolioValue from '../components/CryptoPortfolioScreen/PortfolioValue';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types/navigationTypes';
import { CryptoAsset } from '../types/types';
import { SQLiteContext } from '../App';
import { fetchCryptoMarketData } from '../API/cryptoService';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
  },
  assetRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  assetDetails: {
    flex: 1,
  },
  marketValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 5,
  },
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
    const storedUserId = await AsyncStorage.getItem('user_id');
    
    try {
      if (!db) return;
      
      if (!storedUserId) {
        Alert.alert('Error', 'User not logged in. Please log in first.');
        return;
      }
            // Fetch stored portfolio from the database
      const storedPortfolio = await db.getAllAsync<CryptoAsset>(
        `SELECT id, crypto_name, amount_held FROM CryptoPortfolios WHERE user_id = ?`,
        [storedUserId]
      );

      // Map crypto names for API call
      const coinIds = storedPortfolio.map((asset) => asset.crypto_name.toLowerCase());

      // Fetch market data from API
      const marketData: Array<{
        id: string;
        current_price: number;
        image: string;
      }> = await fetchCryptoMarketData(coinIds);

      // Merge stored portfolio with market data
      const enrichedPortfolio = storedPortfolio.map((asset) => {
        const coinData = marketData.find(
          (data) => data.id.toLowerCase() === asset.crypto_name.toLowerCase()
        );

        return {
          ...asset,
          current_price: coinData ? coinData.current_price : 0,
          market_value: coinData ? coinData.current_price * asset.amount_held : 0,
          image_url: coinData ? coinData.image : '',
        };
      });

      setPortfolio(enrichedPortfolio);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderAsset = ({ item }: { item: CryptoAsset }) => (
    <View style={styles.assetItem}>
      <View style={styles.assetRow}>
        <Image source={{ uri: item.image_url }} style={styles.coinIcon} resizeMode="contain" />
        <View style={styles.assetDetails}>
          <Text>{item.crypto_name}</Text>
          <Text>Amount Held: {item.amount_held}</Text>
          <Text style={styles.marketValue}>Market Value: ${item.market_value.toFixed(2)}</Text>

        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
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
      <Text style={styles.header}>Crypto Portfolio</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={portfolio}
          keyExtractor={(item) => item.id}
          renderItem={renderAsset}
        />
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddCryptoAsset')}
      >
        <Text style={styles.addButtonText}>+ Add Asset</Text>
      </TouchableOpacity>
    </View>
  );
};


export default CryptoPortfolio;
