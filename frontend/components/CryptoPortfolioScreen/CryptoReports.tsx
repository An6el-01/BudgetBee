import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { fetchCryptoMarketChart, fetchCryptoMarketData } from '../../API/cryptoService'; 
import { SQLiteContext } from '../../App';

const colors = {
  primary: '#FCB900',
  secondary: '#F9A800',
  text: '#212121',
  background: '#F5F5F5',
  cardBackground: '#FFFFFF',
};

type PortfolioAsset = {
  id: number;
  user_id: number;
  crypto_name: string;
  amount_held: number;
  current_value: number;
  last_updated: number;
};

type ChartData = {
  labels: string[];
  datasets: {
    data: number[];
    color?: () => string;
  }[];
};

const CryptoReports = () => {
  const db = useContext(SQLiteContext);
  const [portfolioData, setPortfolioData] = useState<PortfolioAsset[]>([]);
  const [topAsset, setTopAsset] = useState<string>('');
  const [portfolioChange, setPortfolioChange] = useState<number>(0);
  const [chartData, setChartData] = useState<ChartData>({ labels: [], datasets: [{ data: [] }] });

  useEffect(() => {
    loadPortfolioData();
  }, []);

  const loadPortfolioData = async () => {
    try {
      if(!db) return;
      const portfolio: PortfolioAsset[] = await db.getAllAsync('SELECT * FROM CryptoPortfolios;');
      setPortfolioData(portfolio);

      if (portfolio.length > 0) {
        const top = portfolio.reduce((prev, curr) => (prev.current_value > curr.current_value ? prev : curr));
        setTopAsset(top.crypto_name);

        const initialValue = portfolio.reduce((sum, asset) => sum + asset.amount_held * asset.current_value, 0);
        const finalValue = await calculateFinalValue(portfolio);
        
        if (initialValue > 0) {
          const changePercentage = ((finalValue - initialValue) / initialValue) * 100;
          setPortfolioChange(changePercentage);
        }

        fetchMarketDataForChart(top.crypto_name);
      }
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    }
  };

  const calculateFinalValue = async (portfolio: PortfolioAsset[]): Promise<number> => {
    try {
      const cryptoIds = portfolio.map((asset) => asset.crypto_name.toLowerCase());
      const prices = await fetchCryptoMarketData(cryptoIds);

      if (!prices) {
        console.error('Failed to fetch prices: Data returned is null or undefined');
        return 0;
      }

      return portfolio.reduce((sum, asset) => {
        const price = prices.find((priceData: { id: string, current_price: number}) =>
          priceData.id === asset.crypto_name.toLowerCase())?.current_price || 0;
          return sum + asset.amount_held * price;
      }, 0);
    } catch (error) {
      console.error('Error calculating final portfolio value:', error);
      return 0;
    }
  };

  const fetchMarketDataForChart = async (cryptoName: string) => {
    try {
      const data = await fetchCryptoMarketChart(cryptoName.toLowerCase(), 'usd', '30');

      if (!data || !data.prices) {
        console.error('Failed to fetch market data: Data returned is null or missing prices');
        setChartData({ labels: [], datasets: [{ data: [] }] });
        return;
      }

      const dates = data.prices.map((price: [number, number]) => new Date(price[0]).toLocaleDateString());
      const values = data.prices.map((price: [number, number]) => price[1]);

      setChartData({
        labels: dates,
        datasets: [{ data: values, color: () => `rgba(40, 167, 69, 1)` }],
      });
    } catch (error) {
      console.error('Error fetching market data:', error);
      setChartData({ labels: [], datasets: [{ data: [] }] });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Crypto Performance Report</Text>

      {/* Performance Overview */}
      <View style={styles.overviewContainer}>
        <View style={styles.metricCard}>
          <Text style={styles.metricText}>Portfolio Change</Text>
          <Text style={styles.metricValue}>{portfolioChange ? `${portfolioChange.toFixed(2)}%` : 'N/A'}</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricText}>Top Asset</Text>
          <Text style={styles.metricValue}>{topAsset || 'N/A'}</Text>
        </View>
      </View>

      {/* Graph for Portfolio Value Over Time */}
      <View style={styles.graphContainer}>
        <Text style={styles.graphTitle}>Portfolio Value Over Time</Text>
        <LineChart
          data={chartData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#f5f5f5',
            backgroundGradientTo: '#f5f5f5',
            decimalPlaces: 2,
            color: () => `rgba(0, 0, 0, 0.6)`,
            labelColor: () => `rgba(0, 0, 0, 0.6)`,
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#28a745',
            },
          }}
          style={{
            marginVertical: 10,
            borderRadius: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          }}
          bezier
          fromZero
        />
      </View>

      {/* Filter for Time Range */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => fetchMarketDataForChart(topAsset)}>
          <Text style={styles.filterButtonText}>1 Week</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => fetchMarketDataForChart(topAsset)}>
          <Text style={styles.filterButtonText}>1 Month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => fetchMarketDataForChart(topAsset)}>
          <Text style={styles.filterButtonText}>1 Year</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
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
    textAlign: 'center',
  },
  graphContainer: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  overviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  metricCard: {
    flex: 1,
    backgroundColor: colors.cardBackground,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  metricText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#28a745',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CryptoReports;
