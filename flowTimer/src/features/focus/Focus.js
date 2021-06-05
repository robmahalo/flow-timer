import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from "react-native-paper";

export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>
          What do you want to focus on?
      </Text>
      <View style={styles.inputContainer}>
      <TextInput />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
      flex: 0.5,
      padding: 16,
      justifyContent: 'center'
  },
  title: {
      color: "black",
      fontWeight: "bold",
      fontSize: 40
  },
  inputContainer: {
      padding: 20,
      paddingTop: 20
  }
});
