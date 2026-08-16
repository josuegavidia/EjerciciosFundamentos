import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function EjerciciosInteractivos() {
  const [nombre, setNombre] = useState("");

  const obtenerSaludo = (nombreIngresado: string): string => {
    if (!nombreIngresado.trim()) return "Ingrese un nombre para saludarle";
    return `¡Hola, ${nombreIngresado}! Bienvenido a la aplicación.`;
  };

  const [edadInput, setEdadInput] = useState("");
  const edad = parseInt(edadInput, 10);

  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [listaProductos, setListaProductos] = useState<
    { id: number; nombre: string; precio: string }[]
  >([]);

  const handleAgregarProducto = () => {
    if (!nombreProducto.trim() || !precioProducto.trim()) return;

    const nuevo = {
      id: Date.now(),
      nombre: nombreProducto,
      precio: `$${precioProducto}`,
    };

    setListaProductos([...listaProductos, nuevo]);
    setNombreProducto("");
    setPrecioProducto("");
  };

  const handleEliminarProducto = (id: number) => {
    setListaProductos(listaProductos.filter((p) => p.id !== id));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Ejercicios Interactivos</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>a) Ingresar Nombre</Text>
        <CustomInput
          placeholder="Ingrese su nombre"
          value={nombre}
          onChangeText={setNombre}
          type="default"
        />
        <View style={styles.resultBox}>
          <Text style={styles.textLabel}>Resultado del saludo:</Text>
          <Text style={styles.textValue}>{obtenerSaludo(nombre)}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>b) Verificar Edad</Text>
        <CustomInput
          placeholder="Ingrese su edad"
          value={edadInput}
          onChangeText={setEdadInput}
          type="number"
        />
        <View style={styles.resultBox}>
          <Text style={styles.textLabel}>Resultado de la condición:</Text>
          {isNaN(edad) || edadInput.trim() === "" ? (
            <Text style={styles.textValue}>Ingrese una edad válida</Text>
          ) : (
            <Text
              style={[
                styles.resultadoCondicional,
                { color: edad >= 18 ? "#27ae60" : "#e74c3c" },
              ]}
            >
              {edad >= 18 ? "Mayor de edad (>= 18)" : "Menor de edad (< 18)"}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>c) Agregar Productos a la Lista</Text>
        <CustomInput
          placeholder="Nombre del producto"
          value={nombreProducto}
          onChangeText={setNombreProducto}
          type="default"
        />
        <CustomInput
          placeholder="Precio (ej. 150)"
          value={precioProducto}
          onChangeText={setPrecioProducto}
          type="number"
        />
        <CustomButton title="Agregar Producto" onPress={handleAgregarProducto} />

        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
          Lista de Productos (.map):
        </Text>

        {listaProductos.length === 0 ? (
          <Text style={styles.emptyText}>No hay productos en la lista.</Text>
        ) : (
          listaProductos.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <View style={styles.itemInfo}>
                <Text style={styles.itemNombre}>• {item.nombre}</Text>
                <Text style={styles.itemPrecio}>{item.precio}</Text>
              </View>
              <TouchableOpacity
                onPress={() => handleEliminarProducto(item.id)}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteText}>X</Text>
              </TouchableOpacity>
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
    paddingTop: 20,
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
  resultBox: {
    backgroundColor: "#f8f9fa",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  textLabel: {
    fontSize: 13,
    color: "#7f8c8d",
  },
  textValue: {
    fontSize: 15,
    fontWeight: "500",
    color: "#2c3e50",
    marginTop: 2,
  },
  resultadoCondicional: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  itemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingRight: 10,
  },
  itemNombre: {
    fontSize: 15,
    color: "#34495e",
  },
  itemPrecio: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2980b9",
  },
  emptyText: {
    textAlign: "center",
    color: "#95a5a6",
    fontStyle: "italic",
    marginVertical: 10,
  },
  deleteButton: {
    backgroundColor: "#ff7675",
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
