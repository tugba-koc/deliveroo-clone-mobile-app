import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
// redux
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Basket from './screens/Basket';
import PreparingOrder from './screens/PreparingOrder';
import Delivery from './screens/Delivery';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Restaurant'
            component={Restaurant}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Basket'
            component={Basket}
            options={{ headerShown: false, presentation: 'modal' }}
          />
          <Stack.Screen
            name='PreparingOrder'
            component={PreparingOrder}
            options={{ headerShown: false, presentation: 'fullScreenModal' }}
          />
          <Stack.Screen
            name='Delivery'
            component={Delivery}
            options={{ headerShown: false, presentation: 'fullScreenModal' }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
