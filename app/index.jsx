import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";

import bg from "../assets/images/bgg.jpeg";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bgImage} resizeMode="cover">
        <View style={styles.bottomContainer}>
          <Text style={styles.text}>
            My first thought in the morning is always yo
          </Text>

          <Link href="/product" style={styles.button}>
            <Text style={styles.buttonText}>Go to Details</Text>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  bgImage: { flex: 1, justifyContent: "flex-end", paddingBottom: 50 },
  bottomContainer: { 
    alignItems: "center",       
    justifyContent: "center",  
    marginBottom:30
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    maxWidth: "95%",       // <-- max width 90% dyal container
  alignSelf: "center"
  },
  button: {
    backgroundColor: "#D2691E",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold", },
});
