import React, { Component } from "react";
import { Text, View, FlatList, ActivityIndicator, Alert } from "react-native";
import { Header, Icon } from "react-native-elements";
import { GLOBAL_COLOR, FONT_SIZE } from "../../../../themes";
import _ from "lodash";
import { pixelScaler } from "../../../../lib";
import ContactList from "../../../../components/ContactList";
import CustomHeader from "../../../../components/CustomHeader";
import Container from "../../../../components/Container";
import { detailedContactStyle } from "./style";
export default class DetailedContact extends Component {
  componentDidMount() {
    let { navigation, thunkGetContactHistory } = this.props;
    let { getParam } = navigation;
    thunkGetContactHistory(getParam("id"));
  }
  handleDeleteContact = item => {
    let { thunkDeleteContact } = this.props;
    Alert.alert(
      "Delete",
      "Are you sure to delete this?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => thunkDeleteContact(item) }
      ],
      { cancelable: false }
    );
  };

  renderItem = ({ item }) => {
    let { duration, img, name } = item;

    return (
      <ContactList
        onRightIconPress={() => {
          this.handleDeleteContact(item);
        }}
        name={name}
        imgUrl={img}
        duration={duration}
      />
    );
  };
  _keyExtractor = (item, index) => index.toString();

  renderTextHistory = () => {};
  renderContent = () => {
    let { detailedContact } = this.props;
    return (
      <View>
        {detailedContact.length > 0 ? (
          <Text style={detailedContactStyle.textHistory}>
            You have called
            {detailedContact.length > 1
              ? `${detailedContact.length} times`
              : `${detailedContact.length} time`}
          </Text>
        ) : (
          <Text style={detailedContactStyle.textHistory}>No call</Text>
        )}

        <FlatList
          data={detailedContact}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
          style={{
            marginTop: pixelScaler(50)
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  render() {
    let { navigation, detailedContact, name } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          leftComponent={
            <Icon
              name="keyboard-backspace"
              color={GLOBAL_COLOR.ARROW_BACK}
              onPress={() => {
                navigation.goBack();
              }}
            />
          }
          headerTitle={name}
        />
        <Container>{this.renderContent()}</Container>
      </View>
    );
  }
}
