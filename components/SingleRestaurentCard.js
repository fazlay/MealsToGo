import * as React from "react";
import { StyleSheet, Text } from "react-native";

import { Card } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const SingleRestaurentCard = ({ restaurent = {} }) => {
  const {
    name = "Some Restaurent",
    icon,
    photos = ["https://www.drupal.org/files/project-images/ap_resize.png"],
    address = "100 random street ",
    isOpen = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurent;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 0, backgroundColor: "white" },
  title: { padding: 16 },
});

export default SingleRestaurentCard;
