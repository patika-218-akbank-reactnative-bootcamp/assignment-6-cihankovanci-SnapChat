import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import Sign from './Screens/Sign';
import {store} from './utils/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import BottomTab from './navigation/BottomTab/BottomTab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <BottomTab />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
