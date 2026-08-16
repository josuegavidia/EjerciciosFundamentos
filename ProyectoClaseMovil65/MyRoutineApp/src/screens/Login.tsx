import { View,Text } from "react-native";
import CustomButton from "../components/CustomButton";

export default function Login(){

    return(
       <View>
        <Text>Bienvenido a Login</Text>
        <CustomButton 
            title="Ir a Home"
            onPress={()=>{}}
        />
       </View> 
    )
} 