import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

interface Producto {
  id: number;
  nombre: string;
  precio: string;
}

export default function App() {
  const [nombreUsuario, setNombreUsuario] = useState<string>("");

  const obtenerSaludo = (nombre: string): string => {
    if (!nombre.trim()) return "Ingrese un nombre para saludarle";
    return `¡Hola, ${nombre}! Bienvenido a la aplicación.`;
  };

  const [edadInput, setEdadInput] = useState<string>("");
  const edad = parseInt(edadInput, 10);

  const [nombreProducto, setNombreProducto] = useState<string>("");
  const [precioProducto, setPrecioProducto] = useState<string>("");
  const [productos, setProductos] = useState<Producto[]>([]);

  const handleAgregarProducto = () => {
    if (!nombreProducto.trim() || !precioProducto.trim()) return;

    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre: nombreProducto,
      precio: `$${precioProducto}`,
    };

    setProductos([...productos, nuevoProducto]);
    setNombreProducto("");
    setPrecioProducto("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Ejercicios de Fundamentos</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>a) Funciones y Variables</Text>
        <Text style={styles.label}>Ingrese el nombre del usuario:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escriba su nombre..."
          value={nombreUsuario}
          onChangeText={setNombreUsuario}
        />
        <Text style={styles.resultLabel}>Nombre almacenado:</Text>
        <Text style={styles.resultValue}>
          {nombreUsuario ? nombreUsuario : "Esperando ingreso..."}
        </Text>
        <Text style={styles.resultLabel}>Saludo personalizado:</Text>
        <Text style={styles.resultValue}>{obtenerSaludo(nombreUsuario)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>b) Estructuras Condicionales</Text>
        <Text style={styles.label}>Ingrese la edad:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escriba su edad..."
          keyboardType="numeric"
          value={edadInput}
          onChangeText={setEdadInput}
        />
        <Text style={styles.resultLabel}>Resultado de la evaluación:</Text>
        {isNaN(edad) || !edadInput.trim() ? (
          <Text style={styles.resultValue}>Ingrese una edad válida</Text>
        ) : (
          <Text style={[styles.condicionalValue, { color: edad >= 18 ? "#27ae60" : "#e74c3c" }]}>
            {edad >= 18 ? "Mayor de edad" : "Menor de edad"}
          </Text>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>c) Lista de Productos (.map)</Text>
        <Text style={styles.label}>Nombre del producto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo: Computadora"
          value={nombreProducto}
          onChangeText={setNombreProducto}
        />
        <Text style={styles.label}>Precio del producto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo: 500"
          keyboardType="numeric"
          value={precioProducto}
          onChangeText={setPrecioProducto}
        />
        <TouchableOpacity style={styles.button} onPress={handleAgregarProducto}>
          <Text style={styles.buttonText}>Agregar a la Lista</Text>
        </TouchableOpacity>

        <Text style={[styles.sectionTitle, { marginTop: 15 }]}>Lista Ingresada:</Text>
        {productos.length === 0 ? (
          <Text style={styles.emptyText}>No hay productos ingresados en la lista.</Text>
        ) : (
          productos.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Text style={styles.itemNombre}>• {item.nombre}</Text>
              <Text style={styles.itemPrecio}>{item.precio}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f4f6f9",
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#1a1a1a",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    paddingBottom: 6,
  },
  label: {
    fontSize: 14,
    color: "#34495e",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#f8f9fa",
    borderColor: "#bdc3c7",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    fontSize: 15,
  },
  resultLabel: {
    fontSize: 13,
    color: "#7f8c8d",
    marginTop: 4,
  },
  resultValue: {
    fontSize: 15,
    fontWeight: "500",
    color: "#2c3e50",
    marginBottom: 8,
  },
  condicionalValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 2,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#2980b9",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 6,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 15,
  },
  emptyText: {
    textAlign: "center",
    color: "#95a5a6",
    fontStyle: "italic",
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  itemNombre: {
    fontSize: 15,
    color: "#34495e",
  },
  itemPrecio: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#27ae60",
  },
});
