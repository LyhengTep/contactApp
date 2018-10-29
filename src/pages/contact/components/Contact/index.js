import React, { Component } from "react";
import { Text, View, StatusBar, FlatList, Alert } from "react-native";
import { Header, Icon } from "react-native-elements";
import { GLOBAL_COLOR, FONT_SIZE, DEVICE } from "../../../../themes";
import { pixelScaler } from "../../../../lib";
import SearchBar from "../SearchBar";
import _ from "lodash";
import ContactList from "../../../../components/ContactList";
import { SCREEN_NAME } from "../../../../config";
import CustomHeader from "../../../../components/CustomHeader";
import Container from "../../../../components/Container";
import { contactStyle } from "./style";

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      dataSource: []
    };
  }
  componentDidMount() {
    this.props.thunkGetContactList();
  }

  handleDeleteContact = item => {
    let { deleteContact } = this.props;
    Alert.alert(
      "Delete",
      "Are you sure to delete this?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => deleteContact(item) }
      ],
      { cancelable: false }
    );
  };
  renderContent = () => {
    let {
      contactList,
      getSearchInput,
      onSearchBarFocus,
      onSearchBarBlur,
      searchResult,
      isSearching,
      searchText,
      onSearBarRightIconPress
    } = this.props;

    return (
      <View>
        <SearchBar
          onChangeText={getSearchInput}
          onFocus={e => {
            this.props.onSearchBarFocus(e);
          }}
          onBlur={onSearchBarBlur}
          iconRight={searchText.length > 0 ? <Icon name="clear" /> : null}
          onRightIconPress={onSearBarRightIconPress}
          value={searchText}
        />
        <FlatList
          data={isSearching ? searchResult : contactList}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
          style={{ marginTop: pixelScaler(20) }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };
  renderItem = ({ item }) => {
    let { duration, img, name, id } = item;
    let { deleteContact, navigation } = this.props;
    return (
      <ContactList
        onRightIconPress={() => {
          this.handleDeleteContact(item);
        }}
        onContactListPress={() => {
          navigation.navigate(SCREEN_NAME.DETAILED, { id });
        }}
        name={name}
        imgUrl={img}
        duration={duration}
      />
    );
  };
  _keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={{ backgroundColor: GLOBAL_COLOR.PRIMARY }}>
        <CustomHeader headerTitle="Calls" />
        <View style={contactStyle.container}>
          <Container>{this.renderContent()}</Container>
        </View>
      </View>
    );
  }
}
