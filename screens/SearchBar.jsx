import * as React from "react";
import { Searchbar } from "react-native-paper";
import {
  Alert,
  ToastAndroid,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import Footer from "../components/Footer";
const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const handleQuery = (query) => setSearchQuery(query);

  async function submitQuery() {
    console.log(searchQuery, "query");

    if (searchQuery === "") {
      Alert.alert("Error", "Search field is empty");
      return false;
    } else {
      ToastAndroid.show("Happy searching", ToastAndroid.LONG);
      navigation.navigate("SearchDetail", searchQuery);
      return true;
    }
    // Alert.alert("Success", `Search results for ${searchQuery} is available!`, [
    //   { text: "Cancel", onPress: () => console.log("press"), style: "cancel" },
    //   { text: "Okay", onPress: () => console.log("yes") },
    // ]);
  }
  return (
    <View style={{ marginTop: 10, flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={{
            padding: 10,
            flex: 1,
            justifyContent: "center",
          }}
          source={require("../assets/Images/pat3.jpg")}
        >
          <View>
            <Searchbar
              placeholder="Search..."
              onChangeText={handleQuery}
              value={searchQuery}
              onIconPress={submitQuery}
              clearIcon={searchQuery.length === 0}
              iconColor="red"
              inputStyle={{ color: "red" }}
              elevation={4}
              onSubmitEditing={submitQuery}
            />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
      {/* <Footer /> */}
    </View>
  );
};
export default Search;
