import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/lemon.png")}
          resizeMode="contain"
        />
        <Text style={styles.title}>
          Little Lemon, your Local Mediterranean Bistro
        </Text>
      </View>
      <Pressable
        onPress={() => router.push("/subscribe")}
        style={styles.button}
      >
        <Text style={styles.btnTitle}>Newsletter</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  button: {
    padding: 14,
    marginBottom: 55,
    backgroundColor: "green",
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
});
