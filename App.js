import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';

const FlexBoxLayout = () => {
  const showMessage = (boxNumber) => {
    Alert.alert(`Box ${boxNumber}`);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://th.bing.com/th/id/OIP.Wt4hmJbJ5FQVPEoko9eVTgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1,3' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>TUGAS DPM PERTEMUAN 2</Text>
        <TouchableOpacity style={styles.box1} onPress={() => showMessage(1)}>
          <Text style={styles.boxText}>Box 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box2} onPress={() => showMessage(2)}>
          <Text style={styles.boxText}>Box 2</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    top: '-100%', 
    left: '29%',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#4eaae1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: '-20%', 
    left: '-50%',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#3dd077',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: '-20%', 
    left: '-25%',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FlexBoxLayout;