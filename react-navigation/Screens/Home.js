import React from 'react'
import { View, Text, Button } from 'react-native';

const Home = ({navigation})=>{
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Welcome to home screen</Text>
            <Button title="Go to Home Details screen" onPress={()=> navigation.navigate("Details")} />
        </View>
    )
}

export default Home;