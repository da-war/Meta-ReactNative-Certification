import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Subscribe = () => {
  const [focus, setFocus] = useState(false);
  const [email, setEmail] = useState("");

  const submitEmail = () => {
    if (email === "") {
      Alert.alert("Please type your email");
      return;
    } else {
      Alert.alert(
        `Thank you for subscribing! We will send our latest recipes to ${email}`
      );
      setEmail("");
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/lemon.png")}
          resizeMode="contain"
        />
        <Text style={styles.title}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.bottomContainer}>
        <TextInput
          style={focus ? styles.inputActive : styles.input}
          placeholder="Type your email"
          keyboardType="email-address"
          autoCapitalize="none"
          onBlur={Keyboard.dismiss}
          onFocus={() => setFocus(true)}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Pressable
          style={focus ? styles.activeButton : styles.inActiveButton}
          onPress={() => submitEmail()}
        >
          <Text style={styles.btnTitle}>Subscribe</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  image: {
    width: 125,
    height: 125,
    marginBottom: 20,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },

  bottomContainer: {
    marginTop: 40,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 20,
  },
  inputActive: {
    padding: 10,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 5,
    marginBottom: 20,
  },
  activeButton: {
    padding: 14,
    backgroundColor: "green",
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inActiveButton: {
    padding: 14,
    backgroundColor: "gray",
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
});
