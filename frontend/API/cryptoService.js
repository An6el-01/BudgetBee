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
      const resposne = await axios.get(`${COINGECKO_API_URL}/coins/${cryptoId}`, {
        params: {
          localization: false,
          tickers: false,
          market_data: true,
          community_data: true,
          developer_data: true,
          sparkling: false,
        },
      });
      return resposne.data;
    } catch (error) {
      console.error('Error fetching detailed crypto data:', error);
      return null;
    }
  };