import { Dimensions } from "react-native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const GLOBAL_COLOR = {
  PRIMARY: "white",
  DANGER: "#e74c3c",
  TEXT_HEADER: "blue",
  ARROW_BACK: "grey"
};
const DEVICE = {
  WIDTH,
  HEIGHT
};

const FONT_SIZE = {
  DEFAULT: 20,
  ICON_SIZE: 30,
  TITLE: 20,
  SUB_TITLE: 15
};

const CONTACT = {
  CONTACT_LIST: {
    MARGIN_BOTTOM: 20
  }
};
export { GLOBAL_COLOR, DEVICE, FONT_SIZE, CONTACT };
