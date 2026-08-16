import { View,Text } from "react-native";
import CustomButton from "../components/CustomButton";

export default function Login(){

    return(
       <View>
        <Text>Bienvenido a Home</Text>
        <CustomButton 
            title="Cerrar Sesion"
            onPress={()=>{}}
        />
       </View> 
    )
} 