import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { DEVICE } from "../../../../themes";
import { Icon } from "react-native-elements";
import { searchBarStyle } from "./style";

export default class SearchBar extends Component {
  static defaultProps = {
    iconRight: null
  };
  render() {
    let { onChangeText, onBlur, onRightIconPress, value, onFocus } = this.props;
    return (
      <View style={searchBarStyle.container}>
        <TextInput
          style={{ height: "100%", width: "90%" }}
          onChangeText={onChangeText}
          onFocus={() => {
            onFocus();
          }}
          onBlur={() => onBlur()}
          value={value}
          controlled={true}
        />

        <TouchableOpacity onPress={onRightIconPress}>
          {this.props.iconRight || <Icon name="search" />}
        </TouchableOpacity>
      </View>
    );
  }
}
