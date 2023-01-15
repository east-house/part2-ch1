import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { myProfile, friendProfiles } from "./src/data";
import Header from "./src/Header";
import Profile from "./src/Profile";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import TabBar from "./src/TabBar";

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdex] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  const ItemSeparatorComponent = () => <Margin height={10} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
      />
    </View>
  );

  const ListHeaderComponent = () => (
    <View>
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
    </View>
  );

  const ListFooterComponent = () => null;

  return (
    <View style={styles.container}>
      <FlatList
        data={friendProfiles}
        keyExtractor={(_, index) => index}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
      />
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdex}
      />
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <View style={{ flex: 1, paddingHorizontal: 15 }}>
  //       <Header />
  //       <Margin height={10} />
  //       <Profile
  //         uri={myProfile.uri}
  //         name={myProfile.name}
  //         introduction={myProfile.introduction}
  //       />
  //       <Margin height={15} />
  //       <Division />
  //       <Margin height={12} />
  //       <FriendSection
  //         friendProfileLen={friendProfiles.length}
  //         onPressArrow={onPressArrow}
  //         isOpened={isOpened}
  //       />
  //       <FriendList data={friendProfiles} isOpened={isOpened} />
  //     </View>
  //     <TabBar selectedTabIdx={selectedTabIdx} setSelectedTabIdx={vvvvvvvv} />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
  },
});
