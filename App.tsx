import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {useState} from 'react';

export default function App() {
  const [randombackground, setrandombackground] = useState("#ffffff");

  const generateColor = () => {
    const hexaRagne = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
      color += hexaRagne[Math.floor(Math.random() * 16)];
    }
    setrandombackground(color);
  }
  return (
    <>
      <StatusBar backgroundColor={randombackground} />
      <View style={[styles.container, {backgroundColor: randombackground}]}>
        <TouchableOpacity onPress={generateColor} style={styles.button}>
          <Text style={styles.buttonText}>Generate Random Color</Text>
        </TouchableOpacity>
      </View> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
