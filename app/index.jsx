import { Text } from '@react-navigation/elements';
import bg from '@/assets/images/bg.jpeg'
import { ImageBackground, StyleSheet, View } from 'react-native';
export default function HomeScreen() {
 return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bgImage} resizeMode="cover">
        <Text style={styles.text}>hello world</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  bgImage: {
    flex: 1, 
    width: '100%',
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
