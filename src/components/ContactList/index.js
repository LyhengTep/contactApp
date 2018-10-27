import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
// import { DEVICE, CONTACT, GLOBAL_COLOR, FONT_SIZE } from "../../../../themes";

import { Avatar, Icon } from "react-native-elements";

import { DEVICE, CONTACT, GLOBAL_COLOR, FONT_SIZE } from "../../themes";
import { pixelScaler } from "../../lib";
import { contactListStyle } from "./style";
pixelScaler;
const IMAGE = {
  "001.png": require("../../assets/img/001.png"),
  "002.png": require("../../assets/img/002.png"),
  "003.png": require("../../assets/img/003.png"),
  "004.png": require("../../assets/img/004.png"),
  "005.png": require("../../assets/img/005.png"),
  "006.png": require("../../assets/img/006.png")
};
export default class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      rightButtonSize: 0
    };
  }
  static defaultProps = {
    rightIcon: null,
    onRightIconPress: () => {}
  };

  handleGetRightButtonSize = ({ nativeEvent }) => {
    let { layout } = nativeEvent;
    let { x, y, width, height } = layout;
    this.setState({
      rightButtonSize: width * 0.11
    });
  };

  render() {
    let {
      onRightIconPress,
      onContactListPress,
      name,
      duration,
      imgUrl,
      textContainerStyle,
      rightButtonStyle,
      containerStyle
    } = this.props;
    return (
      <TouchableOpacity
        style={[contactListStyle.container, containerStyle]}
        onLayout={this.handleGetRightButtonSize}
        activeOpacity={0.8}
        onPress={onContactListPress}
      >
        <Avatar
          size="large"
          source={IMAGE[imgUrl]}
          onPress={onContactListPress}
          activeOpacity={1}
        />
        <View style={[contactListStyle.textContainer, textContainerStyle]}>
          <Title title={name} />
          <SubTitle title={duration} />
        </View>

        <TouchableOpacity
          style={[
            contactListStyle.rightButton(this.state.rightButtonSize),
            rightButtonStyle
          ]}
          onPress={onRightIconPress}
        >
          {this.props.rightIcon || (
            <Icon
              name="clear"
              color={GLOBAL_COLOR.PRIMARY}
              size={pixelScaler(FONT_SIZE.ICON_SIZE)}
            />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

class Title extends Component {
  render() {
    let { title } = this.props;
    let color = "#636e72";
    return (
      <View>
        <Text
          style={{ fontSize: pixelScaler(FONT_SIZE.TITLE), color: color }}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>
    );
  }
}

class SubTitle extends Component {
  render() {
    let { title } = this.props;
    let color = "grey";
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: pixelScaler(7)
        }}
      >
        <Icon
          name="error-outline"
          size={pixelScaler(12)}
          containerStyle={{ marginRight: pixelScaler(9) }}
          color={color}
        />
        <Text
          style={{ fontSize: pixelScaler(FONT_SIZE.SUB_TITLE), color: color }}
        >
          {title}
        </Text>
      </View>
    );
  }
}
