import * as React from "react";
import * as SQLite from "expo-sqlite";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from './types/navigationTypes';
import { checkAndCopyDatabase } from "./Utils/dbUtils";

// Screens
import BottomNavBar from "./navigation/BottomNavBar";
import LogInPage from "./screens/LogInPage";
import SignUpPage from "./screens/SignUpPage";

// SQLite type for SQLiteProvider
type SQLiteProviderProps = {
  children: React.ReactNode;
}


// Auth context
type AuthContextType = {
  signIn: (token: string) => void;
  signOut: () => void;
};
export const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

// SQLite database context
const SQLiteContext = React.createContext<ReturnType<typeof SQLite.openDatabaseSync> | undefined>(undefined);

const Stack = createNativeStackNavigator<RootStackParamList>();

const colors = {
  primary: '#FCB900',
  secondary: '#F9A800',
  text: '#212121',
  background: '#F5F5F5',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Initialize SQLite database
const db = SQLite.openDatabaseSync("mySQLiteDB.db");

// SQLite Provider Component
const SQLiteProvider: React.FC<SQLiteProviderProps> = ({ children }) => {
  return (
    <SQLiteContext.Provider value={db}>
      {children}
    </SQLiteContext.Provider>
  );
};

const App = () => {
  const [state, dispatch] = React.useReducer((prevState: any, action: any) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return { ...prevState, userToken: action.token, isLoading: false };
      case 'SIGN_IN':
        return { ...prevState, isSignout: false, userToken: action.token };
      case 'SIGN_OUT':
        return { ...prevState, isSignout: true, userToken: null };
      default:
        return prevState;
    }
  }, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        // Uncomment below if needed to copy or set up the database
        await checkAndCopyDatabase();
      } catch (e) {
        console.error(e);
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (token: string) => {
        await AsyncStorage.setItem('userToken', token);
        dispatch({ type: 'SIGN_IN', token });
      },
      signOut: async () => {
        await AsyncStorage.removeItem('userToken');
        dispatch({ type: 'SIGN_OUT' });
      },
    }),
    []
  );

  if (state.isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <SQLiteProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {state.userToken == null ? (
              <>
                <Stack.Screen name="LoginPage" component={LogInPage} />
                <Stack.Screen name="SignUpPage" component={SignUpPage} />
              </>
            ) : (
              <Stack.Screen name="HomeMain" component={BottomNavBar} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SQLiteProvider>
    </AuthContext.Provider>
  );
};

// Export SQLite context for use in other components
export { SQLiteContext };
export default App;
