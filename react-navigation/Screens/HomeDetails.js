import React from 'react'
import { View, Text, Button} from 'react-native';

const HomeDetails = ({navigation})=>{
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Welcome to HomeDetails screen</Text>
            <Button title="Details Again" onPress={()=> navigation.push("Details")} />

            <Button title="Go back" onPress={()=> navigation.goBack()} />

            <Button title="Go Home" onPress={()=> navigation.navigate("Home")} />

            <Button title="Go to first screen" onPress={()=> navigation.popToTop()} />
        </View>
    )
}

export default HomeDetails;