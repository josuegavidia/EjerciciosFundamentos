import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  type?: "default" | "password" | "number" | "email";
};

export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  type = "default",
}: Props) {
  //tema: manejo de estado LOCAL {en el componente}
  //hook: useState para definir variable en el estado
  const [isSecureText, setIsSecureText] = useState(type === "password");
  //Primera accion: inicializar la variable
  //Segunda accion: utilizar la variable; ej: en propiedad secureTextEntry de TextInput
  //Tercera accion: actualizar su valor; setIsSecureText(true)
  const isPasswordField = type === "password";

  const icon: (typeof MaterialIcons)["name"] | undefined =
    type === "password"
      ? "lock"
      : type === "email"
        ? "alternate-email"
        : undefined;

  const keyboardType: KeyboardTypeOptions =
    type === "email"
      ? "email-address"
      : type === "number"
        ? "number-pad"
        : "default";

  const getError = () => {
    if (type === "email" && !value.includes("@")) return "Correo invalido";
    if (type === "password" &&  value.length < 4) return "La contraseña es debil"
  };

  const error = getError();
  
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputContainer}>
        {icon && <MaterialIcons name={icon} size={22} />}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={isSecureText}
        />
        {isPasswordField && (
          <TouchableOpacity
            onPress={() => {
              setIsSecureText(!isSecureText);
            }}
          >
            <Ionicons name={isSecureText ? "eye" : "eye-off"} size={22} />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  inputContainer: {
    //distribucion de componentes con flexbox
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 9,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    width: "50%",
  },
});
