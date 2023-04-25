import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../src/services/styles";

export default function More() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>More</Text>
        <Text style={styles.subtitle}>Comming Soon</Text>
      </View>
    </View>
  );
}
