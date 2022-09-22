import React, { useCallback, useEffect } from "react";
import {
  Image,
  ImageBackground,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import { TextInput, HelperText, Text, Button } from "react-native-paper";
import { ValidateEmail } from "../utils/formatter";
export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [time, setTime] = React.useState(false);

  useEffect(() => {
    setTime(true);
    setTimeout(() => {
      setTime(false);
    }, 5000);
  }, []);

  const onSubmit = () => {
    console.log(email, password, "des");

    if (ValidateEmail(email) == true) {
      console.log("success");

      Alert.alert("Hello!!!", "Coming soon");
    } else {
      console.log("failed");
      return false;
    }
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={{ padding: 20, flex: 1 }}
          source={require("../assets/Images/pat3.jpg")}
        >
          {time ? (
            <ActivityIndicator
              size="large"
              color="white"
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          ) : (
            <>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Text
                  variant="headlineSmall"
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  Please login
                </Text>
              </TouchableWithoutFeedback>
              <TextInput
                mode="outlined"
                label="Email"
                right={<TextInput.Icon icon="account-box" />}
                onChangeText={setEmail}
              />
              <TextInput
                style={{ marginTop: 5 }}
                mode="outlined"
                label="Password"
                secureTextEntry
                right={<TextInput.Icon icon="lock" />}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={onSubmit}>
                <Button
                  mode="elevated"
                  style={
                    (email.length && password.length) === 0
                      ? { marginTop: 10, backgroundColor: "#dddd" }
                      : { marginTop: 10 }
                  }
                  disabled={(email.length && password.length) === 0}
                >
                  Login
                </Button>
              </TouchableOpacity>
            </>
          )}
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
