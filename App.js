import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah */}
      <Text style={styles.text}>Teks di Tengah</Text>

      {/* Kontainer kotak dengan FlexBox */}
      <View style={styles.boxContainer}>
        {/* Kotak 1 */}
        <View style={styles.box1} />
        {/* Kotak 2 */}
        <View style={styles.box2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%', // Lebar kotak relatif terhadap layar
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red', // Warna kotak 1
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green', // Warna kotak 2
  },
});
