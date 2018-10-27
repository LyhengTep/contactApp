import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header } from "react-native-elements";
import { GLOBAL_COLOR } from "../../themes";
import { customHeaderStyle } from "./style";
export default class CustomHeader extends Component {
  static defaultProps = {
    headerTitle: ""
  };
  render() {
    let { headerTitle, leftComponent } = this.props;
    return (
      <View>
        <Header
          centerComponent={{
            text: headerTitle,
            style: customHeaderStyle.centerComponentStyle
          }}
          backgroundColor={GLOBAL_COLOR.PRIMARY}
          leftComponent={leftComponent}
        />
      </View>
    );
  }
}
