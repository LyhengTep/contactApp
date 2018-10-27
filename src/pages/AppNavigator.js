import { createStackNavigator } from "react-navigation";
import { SCREEN_NAME } from "../config";
import Contact from "./contact/container";
import DetailedContact from "./contactDetailed/container";

const AppNavigator = createStackNavigator(
  {
    [SCREEN_NAME.CONTACT]: Contact,
    [SCREEN_NAME.DETAILED]: DetailedContact
  },
  {
    navigationOptions: {
      header: null
    },
    initialRouteName: SCREEN_NAME.CONTACT
  }
);

export default AppNavigator;
