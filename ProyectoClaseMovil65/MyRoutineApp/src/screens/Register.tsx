import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //tipo string
  const [password, setPassword] = useState("");
  //tipo number
  const [attempts, setAttempts] = useState(0);
  //tipo boolean
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleRegister = () => {
    // incrementar contador
    setAttempts(attempts + 1);
    if (attempts === 3) {
      setIsDisabled(true);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Crear Cuenta</Text>
      <Text style={styles.subtitle}>Complete sus datos para registrarse</Text>
      {/* implementacion de componente personalizado */}
      <CustomInput
        placeholder={"Nombre"}
        value={name}
        onChangeText={setName}
        type="default" />
      <CustomInput
        placeholder={"Correo"}
        value={email}
        onChangeText={setEmail}
        type="email" />
      <CustomInput
        placeholder={"Contraseña"}
        value={password}
        onChangeText={setPassword}
        type="password" />

      {/* impleentacion de estado booleano en un form */}
      <TouchableOpacity
        style={styles.termsContainer}
        onPress={() => setAcceptedTerms(!acceptedTerms)}>
        <View style={[styles.checkbox, acceptedTerms ? styles.checkboxSelected : styles.checkboxEmpty]} />
        <Text style={styles.termsText}>Acepto los terminos y condiciones</Text>
      </TouchableOpacity>

      <CustomButton
        title={"Registrarme"}
        onPress={handleRegister}
        disabled={isDisabled} />

      <Text>
        Intentos de registro: {attempts}
      </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: '#757575'
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 5,
  },
  checkboxEmpty: {
    borderColor: '#535354',
    backgroundColor: '#f0f0f2'
  },
  checkboxSelected: {
    borderColor: '#282829',
    backgroundColor: '#a29cff'
  },
  termsText: {
    fontSize: 12,
    paddingLeft: 10,
  },

});