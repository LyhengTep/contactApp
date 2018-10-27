import { GLOBAL_COLOR, FONT_SIZE } from "../../themes";
import { pixelScaler } from "../../lib";

const customHeaderStyle = {
  centerComponentStyle: {
    color: GLOBAL_COLOR.TEXT_HEADER,
    fontSize: pixelScaler(FONT_SIZE.DEFAULT)
  }
};

export { customHeaderStyle };
