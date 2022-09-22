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
export default function Register() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const [status, setStatus] = React.useState(false);
  const [time, setTime] = React.useState(false);

  useEffect(() => {
    setTime(true);
    setTimeout(() => {
      setTime(false);
    }, 5000);
  }, []);

  const onSubmit = () => {
    console.log(email, password, "des");
    if (password !== password2) {
      console.log("Password not matched");
      Alert.alert("Error", "Password not matched");
      return false;
    } else if (ValidateEmail(email) == false) {
      console.log("failed");
      return false;
    } else {
      console.log("success");

      Alert.alert("Hello!!!", "Coming soon");
      return true;
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
                  Please Register
                </Text>
              </TouchableWithoutFeedback>
              <TextInput
                mode="outlined"
                label="Username"
                right={<TextInput.Icon icon="account-box" />}
                onChangeText={setUsername}
              />
              <TextInput
                mode="outlined"
                label="Email"
                right={<TextInput.Icon icon="email" />}
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
              <TextInput
                style={{ marginTop: 5 }}
                mode="outlined"
                label="Confirm password"
                secureTextEntry
                right={<TextInput.Icon icon="lock" />}
                onChangeText={setPassword2}
              />
              <TouchableOpacity>
                <Button
                  onPress={onSubmit}
                  mode="elevated"
                  style={
                    (email.length &&
                      password.length &&
                      username.length &&
                      password2.length) === 0
                      ? { marginTop: 10, backgroundColor: "#dddd" }
                      : { marginTop: 10 }
                  }
                  disabled={
                    (email.length &&
                      username.length &&
                      password.length &&
                      password2.length) === 0
                  }
                >
                  Register
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
