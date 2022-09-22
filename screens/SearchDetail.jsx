import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import axios from "axios";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
export default function SearchDetail({ route, navigation }) {
  const [searchDetail, setSearchDetail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const searchQuery = route.params;
  const getSearch = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=18d1a6073be547cdb406f383c6e53b60`
      );
      const data = res.data.articles;
      // console.log(data, "searchData");
      setSearchDetail(data);
    } catch (err) {
      console.log(err.messsage);
    }
  };

  useEffect(() => {
    getSearch();
    console.log(route.params, "query");
    console.log(searchQuery, "query2");
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getSearch().then(() => {
      setRefreshing(false);
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {isLoading ? (
        <>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 10,
              textTransform: "capitalize",
            }}
          >
            Search Results for {searchQuery}
          </Text>
          <Text style={{ textAlign: "center" }}>
            {searchDetail.length === 0
              ? `No Search results for ${searchQuery} found`
              : ""}
          </Text>
          <FlatList
            refreshControl={
              <RefreshControl
                onRefresh={onRefresh}
                refreshing={refreshing}
                //tintColor="#fff"
                //titleColor="#fff"
                //progressBackgroundColor="red"
                colors={["red", "green", "blue"]}
              />
            }
            data={searchDetail}
            renderItem={({ item }) => {
              const description = item.description.slice(0, 80);
              return (
                <Card style={{ marginVertical: 10, marginHorizontal: 10 }}>
                  <Card.Cover
                    source={
                      item.urlToImage
                        ? { uri: item.urlToImage }
                        : require("../assets/Images/pat2.png")
                    }
                  />
                  <Card.Content>
                    <Title>{item.title}</Title>
                    <Paragraph>{description}...</Paragraph>
                  </Card.Content>
                  <TouchableOpacity>
                    <Card.Actions>
                      <Button
                        icon="arrow-right"
                        mode="contained-tonal"
                        onPress={() => {
                          navigation.navigate("ShowDetail", item);
                        }}
                      >
                        Readmore
                      </Button>
                    </Card.Actions>
                  </TouchableOpacity>
                </Card>
              );
            }}
            ListFooterComponent={
              <>{searchDetail.length === 0 ? "" : <Footer />}</>
            }
          />
        </>
      ) : (
        <Loader size="large" color="red" />
      )}
    </View>
  );
}
