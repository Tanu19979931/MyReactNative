import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './nevigation/tabs'
import  BottomPoupup  from './nevigation/BottomPopup'
import SplashScreen from './screens/SplashScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
              headerShown: false
          }}
                initialRouteName={'SplashScreen'}
            >
                <Stack.Screen name="Home" component={Tabs}
                 />
                 <Stack.Screen name="BottomPoupup" component={BottomPoupup} />
                 <Stack.Screen name="SplashScreen" component={SplashScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;