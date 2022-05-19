import React, { Component } from "react";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { CAMPSITES } from "../shared/campsites";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }

  static navigationOptions = {
    title: "Directory",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
          leftAvatar={{ source: require("./images/react-lake.jpg") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Directory;
