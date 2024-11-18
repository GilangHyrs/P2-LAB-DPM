import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBoxLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TUGAS DPM PERTEMUAN 2</Text>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5', 
    padding: 20, 
  },
  text: {
    position: 'absolute', 
    fontSize: 24, 
    color: 'gray', 
    fontWeight: 'bold', 
    textAlign: 'center', 
    top: '40%', 
    left: '33%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#4eaae1', 
    borderRadius: 10,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#3dd077', 
    borderRadius: 10,
  },
});

export default FlexBoxLayout;