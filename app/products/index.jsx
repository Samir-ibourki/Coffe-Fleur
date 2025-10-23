import { Ionicons } from "@expo/vector-icons";

import { Link, router } from "expo-router";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const products = [
  {
    id: 1,
    name: "Espresso",
    price: "25 MAD",
    image: require("@/assets/images/pro1.jpeg"),
    description: "Strong and rich coffee shot Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fuga nihil magnam quis iusto dolores perspiciatis natus expedita iure, autem sunt error in necessitatibus consequatur, saepe, ex alias! Necessitatibus, laboriosam..",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "30 MAD",
    image: require("@/assets/images/pro2.jpeg"),
    description: "Espresso with steamed milk and foam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fuga nihil magnam quis iusto dolores perspiciatis natus expedita iure, autem sunt error in necessitatibus consequatur, saepe, ex alias! Necessitatibus, laboriosam..",
  },
  {
    id: 3,
    name: "Latte",
    price: "28 MAD",
    image: require("@/assets/images/pro3.jpeg"),
    description: "Smooth blend of coffee and milk Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fuga nihil magnam quis iusto dolores perspiciatis natus expedita iure, autem sunt error in necessitatibus consequatur, saepe, ex alias! Necessitatibus, laboriosam..",
  },
  {
    id: 4,
    name: "Mocha",
    price: "32 MAD",
    image: require("@/assets/images/pro4.jpeg"),
    description: "Coffee with chocolate and milk Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fuga nihil magnam quis iusto dolores perspiciatis natus expedita iure, autem sunt error in necessitatibus consequatur, saepe, ex alias! Necessitatibus, laboriosam..",
  },
];

let Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Ionicons name="home" size={28} color="white" />
      </TouchableOpacity>
      <Image
        style={styles.logo}
        source={require("@/assets/images/logo.png")}
      />
      <TouchableOpacity onPress={() => router.navigate('/products/2')}>
        <Ionicons name="cart-outline" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

let FormInput = () => {
  return (
    <View style={styles.parentInput}>
      <Ionicons name="search" size={20} color="#0a0a0aff" style={styles.icon} />
      <TextInput
        placeholder="search.."
        style={styles.input}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

let Slider = () => {
  return (
    <View style={styles.sliderContainer}>
      <ImageBackground
        source={require("@/assets/images/slider.png")}
        style={styles.sliderimg}
        imageStyle={{ borderRadius: 15 }}
      >
        <Text style={styles.sliderText}>Love in the Law of Arab Coffee</Text>
      </ImageBackground>
    </View>
  );
};

let CardProducts = () => {
  return (
    <ScrollView contentContainerStyle={styles.parentcad}>
      {products.map((pro) => (
        <Link href={`/products/${pro.id}`} asChild key={pro.id}>
          <TouchableOpacity style={styles.card}>
            <Image resizeMode="cover" style={styles.imgCard} source={pro.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{pro.name}</Text>
              <Text style={styles.price}>{pro.price}</Text>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor:'#1F1B18' }}>
      <Header />
      <FormInput />
      <Slider />
      <CardProducts />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerSafe: {
    backgroundColor: "#2b2424ff",
  },
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  sliderContainer: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    marginTop: 10,
  },
  sliderimg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "start",
  },
  sliderText: {
    color: "#C9A227",
    fontSize: 25,
    fontWeight: "semibold",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginLeft: 30,
    fontStyle: "italic",
    width: 200,
    lineHeight: 50,
  },
  parentInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeee",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: 15,
  },

  icon: { marginRight: 10 },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  slider: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
  parentcad: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    width: "95%",
    alignSelf: "center",
  },
  card: {
    width: "48%",
    backgroundColor: "#f7eeeeee",
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
   elevation: 5, 

  shadowColor: "#e4d4d4ff",          
  shadowOffset: { width: 0, height: 3 },  
  shadowOpacity: 0.25,          
  shadowRadius: 4,      
  },
  imgCard: {
    width: "100%",
    height: 140,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color:'#C9A227'
  },
  price: {
    fontSize: 16,
    color: "#7A7A7A",
  },
});
