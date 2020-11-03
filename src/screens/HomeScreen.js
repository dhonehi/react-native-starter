import React from 'react';
import {Button, Text, View} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate("Details")} title="Go to details"/>
        </View>
    )
}

export default HomeScreen
