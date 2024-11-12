import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchCryptoPrices } from '../../API/cryptoService';
import { CrytpoAsset } from '../../types/types';

type PortfolioValueProps = {
  portfolio: CrytpoAsset[]
}


const PortfolioValue: React.FC<PortfolioValueProps> = ({ portfolio }) => {
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const getPortfolioValue = async () => {
      const cryptoIds = portfolio.map(asset => asset.crypto_name.toLowerCase());
      const prices = await fetchCryptoPrices(cryptoIds);

      if (prices) {
        const value = portfolio.reduce((sum, asset) => {
          const price = prices[asset.crypto_name.toLowerCase()]?.usd || 0;
          return sum + asset.amount_held * price;
        }, 0);
        setTotalValue(value);
      }
    };

    getPortfolioValue();
  }, [portfolio]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total Portfolio Value</Text>
      <Text style={styles.value}>${totalValue.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontSize: 18, color: '#888' },
  value: { fontSize: 28, fontWeight: 'bold' },
});

export default PortfolioValue;
