import { Ionicons } from "@expo/vector-icons";
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

let Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/assets/images/logo2.png")}
      />
      <TouchableOpacity onPress={() => console.log("Icon clicked")}>
        <Ionicons name="cart-outline" size={28} color="black" />
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

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header />
      <FormInput />
      <Slider />
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
    color: "#993c06ff",
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
});
