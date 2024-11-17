import axios from 'axios';

const COINGECKO_API_URL = "https://api.coingecko.com/api/v3"

export const fetchCryptoMarketData = async (cryptoIds, vsCurrency = 'usd') => {
  try{
    const response =  await axios.get(`${COINGECKO_API_URL}/coins/markets`, {
      params: {
        vs_currency: vsCurrency,
        ids: cryptoIds.join(''),
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false,
        price_change_percentage: '1h,24h,7d',
      },
    });
    return response.data;
  }catch(error){
    console.error('Error fetching crypto market data:', error);
    return null;
  }
};

// Fetch historical price data for a specific cryptocurrency
export const fetchCryptoMarketChart = async (cryptoId, vsCurrency = 'usd', days = '30', interval = 'daily') => {
    try {
      const response = await axios.get(`${COINGECKO_API_URL}/coins/${cryptoId}/market_chart`, {
        params: {
          vs_currency: vsCurrency,
          days,
          interval,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching crypto market chart:', error);
      return null;
    }
  };

  export const fetchCryptoMarketChartRange = async (cryptoId, vsCurrency = 'usd', fromTimestamp, toTimestamp) => {
    try{
      const response = await axios.get(`${COINGECKO_API_URL}/coins/${cryptoId}/market_chart/range`, {
        params: {
          vs_currency: vsCurrency,
          from: fromTimestamp,
          to: toTimestamp,
        },
      });
      return response.data
    }catch (error) {
      console.error('Error fetching historical data within time range:', error);
      return null;
    }
  };

  export const fetchCryptoDetails =  async (cryptoId) => {
    try{
      const response = await axios.get(`${COINGECKO_API_URL}/coins/${cryptoId}`, {
        params: {
          localization: false,
          tickers: false,
          market_data: true,
          community_data: true,
          developer_data: true,
          sparkling: false,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching detailed crypto data:', error);
      return null;
    }
  };

  export const fetchCoins = async () => {
    try{
      const response = await fetch(`${COINGECKO_API_URL}/coins/list`)
      if(!response.ok){
        throw new Error(`Failed to fetch coins list: ${response.statusText}`);
      }

      const data = await response.json();
      return data.map((coin) => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
      }));
    }catch(error) {
      console.error('Error fetching list of coins:', error);
      throw error;
    }
  };