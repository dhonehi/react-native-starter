import React from 'react';
import {Button, Text, View} from "react-native";

const DetailsScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button onPress={() => navigation.push("Details")} title="Go to details again"/>
            <Button onPress={() => navigation.navigate("Home")} title="Go to home"/>
            <Button onPress={() => navigation.goBack()} title="Go back"/>
            <Button onPress={() => navigation.popToTop()} title="Go to the first screen"/>
        </View>
    )
}

export default DetailsScreen
