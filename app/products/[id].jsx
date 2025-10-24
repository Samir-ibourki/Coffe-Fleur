import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { products } from "./index";   
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const product = products.find((item) => item.id == Number(id));

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Product Not Found</Text>
      </View>
    );
  }

  return (
    

    
    <View style={styles.container}>
      <SafeAreaView>
      {/* <Image source={product.image} style={styles.image} /> */}
       <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      
      <Image resizeMode="cover" source={product.image} style={styles.image} />

      
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>

     
      <Text style={styles.description}>{product.description}</Text>

      
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>Add to Cart</Text>
      </TouchableOpacity>
      </SafeAreaView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1B18",
    padding: 15,
  },
  backBtn: {
    marginBottom: 10,
  },
  backText: {
    color: "#C9A227",
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: 450,
    borderRadius: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#F8F5F2",
  },
  price: {
    fontSize: 20,
    color: "#C9A227",
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: "#ddd",
    lineHeight: 24,
    marginBottom: 20,
  },
  addBtn: {
    backgroundColor: "#C9A227",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  addBtnText: {
    color: "#1F1B18",
    fontSize: 18,
    fontWeight: "bold",
  },
});
