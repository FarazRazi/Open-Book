import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../../src/services/styles";
import { Link } from "expo-router";

export default function Accounts() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Accounts</Text>
        <Text style={styles.subtitle}>Comming Soon</Text>
        <Link style={styles.subtitle} href={"./Accounts/Faraz"}>
          Acccount Faraz
        </Link>

        <Link style={styles.subtitle} href={"./Accounts/Razi"}>
          Acccount Razi
        </Link>
      </View>
    </View>
  );
}
