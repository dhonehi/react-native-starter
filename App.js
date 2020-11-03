import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from "./src/screens/MainTabScreen";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={MainTabScreen}/>
                {/* <Drawer.Screen name="Details" component={DetailsStackScreen}/>*/}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
