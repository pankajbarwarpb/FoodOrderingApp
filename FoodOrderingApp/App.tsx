import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './src/screens/landingPage';
import 'react-native-gesture-handler';
import RestaurantScreen from './src/screens/restaurants';
import Items from './src/screens/items/itemsInRestaurant';
import CartScreen from './src/screens/cart';
import OrderSuccessScreen from './src/screens/order-success';
import HistoryScreen from './src/screens/history/history-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing Page"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Restaurant Screen"
          component={RestaurantScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Items"
          component={Items}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order Success Screen"
          component={OrderSuccessScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
