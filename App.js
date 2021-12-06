import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import AlarmListScreen from './src/screens/AlarmListScreen';
import StartingScreen from './src/screens/StartingScreen';
import reduxStore from './src/store/store';
import PushNotification, {Importance} from 'react-native-push-notification';

enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  const createChannel = () =>
    PushNotification.createChannel({
      channelId: 'soundAlarm',
      channelName: 'notification',
      soundName: 'bell1.mp3',
      importance: Importance.HIGH,
      vibrate: true,
    });

  useEffect(() => {
    createChannel();
  }, []);

  const {store, persistor} = reduxStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Start"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Alarm" component={AlarmListScreen} />
            <Stack.Screen name="Start" component={StartingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
