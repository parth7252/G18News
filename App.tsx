import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyComponent from './src/component/MyComponent'; // Your existing component
import WebViewScreen from './src/component/WebViewScreen'; // Your new WebView screen component

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={MyComponent} options={{ headerShown: false}} /> */}
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
