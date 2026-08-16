import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import EjerciciosFundamentos from "../screens/EjerciciosFundamentos";
import EjerciciosInteractivos from "../screens/EjerciciosInteractivos";

// 1. declarar tipado para las pantallas junto con sus parametros
export type RootStackParamList = {
    LoginScreen: undefined,
    HomeScreen: { email: string },
    RegisterScreen: undefined,
    EjerciciosFundamentos: undefined,
    EjerciciosInteractivos: undefined
}

// 2. crear el stack navigator encargado de manejar la navegacion
const Stack = createNativeStackNavigator<RootStackParamList>();

// 3. utilizamos el stack de navegacion  
export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="EjerciciosInteractivos">
            <Stack.Screen name="EjerciciosInteractivos" component={EjerciciosInteractivos} options={{ title: "Ejercicios Interactivos" }} />
            <Stack.Screen name="EjerciciosFundamentos" component={EjerciciosFundamentos} options={{ title: "Ejercicios Estáticos" }} />
            <Stack.Screen name='HomeScreen' component={Home} />
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="RegisterScreen" component={Register} />
        </Stack.Navigator>
    );
}