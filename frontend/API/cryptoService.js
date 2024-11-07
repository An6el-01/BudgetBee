import axios from 'axios';

const COINGECKO_API_URL = "URL"

export const fetchCryptoPrices = async (cryptoIds, vsCurrency = 'usd') => {
    try {
      const response = await axios.get(`${COINGECKO_API_URL}/simple/price`, {
        params: {
          ids: cryptoIds.join(','), // e.g., 'bitcoin,ethereum'
          vs_currencies: vsCurrency, // e.g., 'usd', 'gbp', etc.
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
      return null;
    }
  };

// Fetch historical price data for a specific cryptocurrency
export const fetchCryptoMarketChart = async (cryptoId, vsCurrency = 'usd', days = '7') => {
    try {
      const response = await axios.get(`${COINGECKO_API_URL}/coins/${cryptoId}/market_chart`, {
        params: { vs_currency: vsCurrency, days },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching crypto market chart:', error);
      return null;
    }
  };