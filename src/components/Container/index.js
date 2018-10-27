import React, { Component } from "react";
import { Text, View } from "react-native";
import { containerStyle } from "./style";

export default class Container extends Component {
  static defaultProps = {
    style: {}
  };
  render() {
    let { children, style } = this.props;

    return <View style={[containerStyle.container, style]}>{children}</View>;
  }
}
