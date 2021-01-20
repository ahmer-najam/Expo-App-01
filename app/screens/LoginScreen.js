import React from "react";
import * as Yup from "yup";
import { StyleSheet, Image, ImageBackground, View, Text } from "react-native";
import { AppForm, AppFormField, AppSubmitButton } from "../components/form";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/AppBg-02.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/AppLogo-FoodFight.jpg")}
        />
        <Text style={styles.tagLine}>Sell What You EAT</Text>
      </View>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.container}>
          <AppFormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <AppSubmitButton title="Login" />
        </View>
      </AppForm>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    position: "absolute",
    alignItems: "center",
    padding: 20,
    width: "100%",
    flex: 1,
    top: 650,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 40,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  container: {
    position: "absolute",
    top: 300,
    padding: 20,
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
});

export default LoginScreen;
