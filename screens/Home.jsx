import React, { useEffect, useState } from "react";
import { View } from "react-native";

import Contents from "../components/Contents";
import Loader from "../components/Loader";
import global from "../styles/global";
export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, []);
  return (
    <View style={global.home}>
      {isLoading ? (
        <Contents />
      ) : (
        <>
          <Loader size="large" color="red" />
        </>
      )}
    </View>
  );
}
