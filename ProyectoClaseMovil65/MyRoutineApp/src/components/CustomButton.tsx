import { Button, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  // tipo: union de literales
  variant?: "primary" | "secondary" | "tertiary"
  //tipo: literal
  //variant: "primary"
  disabled?: boolean | null | undefined
};

//definicion de componente personalizado utilizando componentes nativos
export default function CustomButton({ title, onPress, variant = "primary", disabled = false }: CustomButtonProps) {
  const styles = getStyles(variant);

  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}> {title} </Text>
    </Pressable>
  );
}

const getStyles = (variant: "primary" | "secondary" | "tertiary") =>
  StyleSheet.create({
    button: {
      backgroundColor: variant === "primary" ? "navy" :
        variant === "secondary" ? "lightblue" : 'lightgray',
      width: 150,
      padding: 12,
      borderRadius: 6,
    },
    buttonText: {
      color: variant === "primary" ? "white" : "black"
    }
  })
