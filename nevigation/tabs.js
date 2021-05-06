import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { Home } from "../screens"

import { COLORS, icons } from "../constants"
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        
        >
            <Tab.Screen
            name = "Orders"
            component = {Home}
            
            options= {{
                tabBarIcon:({focused}) =>(
                    <Image
                    source = {icons.orders}
                    resizeMode = "contain"
                    style = {{
                        width:25,
                        height:25,
                        tintColor: focused? COLORS.black: COLORS.darkgray
                    }}
                    
                    />
               
                )
            }}
            />
            <Tab.Screen
            name = "Donate"
            component = {Home}
            options= {{
                tabBarIcon:({focused}) =>(
                    <Image
                    source = {icons.donate}
                    resizeMode = "contain"
                    style = {{
                        width:25,
                        height:25,
                        tintColor:focused? COLORS.black: COLORS.darkgray
                    }}
                    />
               
                )
            }}
            />
            <Tab.Screen
            name = "History"
            component = {Home}
            options= {{
                tabBarIcon:({focused}) =>(
                    <Image
                    source = {icons.history}
                    resizeMode = "contain"
                    style = {{
                        width:25,
                        height:25,
                        tintColor:focused? COLORS.black: COLORS.darkgray
                    }}
                    />
               
                )
            }}
            />
            </Tab.Navigator>
    )
}
export default Tabs;