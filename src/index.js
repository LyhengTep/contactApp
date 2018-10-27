import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import AppNavigator from "./pages/AppNavigator";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
