import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";

export default function App() {
  return (
    <View style={cardContainer}>
      <View style={cardFrame}>
        <Image
          style={cardImage}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View style={cardContentFrame}>
          <View style={cardContentAuthor}>
            <Text style={cardTitle}>Figma UI UX Design Essentials</Text>
            <Text style={cardDescription}>By Daniel Walter Scott</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={cardIcon}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={cardDescription}>30 Minutes</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const theme = StyleSheet.create({
  container: {
    flex: 2,
    padding: 12,
    flexDirection: "row",
    space: 12,
  },
  frame: {
    height: 290,
    backgroundColor: "#fff",
    minWidth: 150,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  contentFrame: {
    padding: 12,
    space: 12,
  },
  contentAuthor: {
    height: 94,
  },
  image: {
    minWidth: 150,
    height: 120,
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    color: "#2C313A",
  },
  description: {
    fontSize: 10,
    fontWeight: 400,
    color: "#5E677B",
  },
  icon: {
    width: 24,
    marginRight: 4,
    height: 24,
  },
});
const cardContainer = StyleSheet.compose(theme.container);
const cardFrame = StyleSheet.compose(theme.frame);
const cardContentFrame = StyleSheet.compose(theme.contentFrame);
const cardContentAuthor = StyleSheet.compose(theme.contentAuthor);
const cardImage = StyleSheet.compose(theme.image);
const cardTitle = StyleSheet.compose(theme.title);
const cardDescription = StyleSheet.compose(theme.description);
const cardIcon = StyleSheet.compose(theme.icon);
