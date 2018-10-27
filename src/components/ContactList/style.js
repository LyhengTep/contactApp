import { pixelScaler } from "../../lib";
import { CONTACT, GLOBAL_COLOR } from "../../themes";

const contactListStyle = {
  container: {
    marginBottom: pixelScaler(CONTACT.CONTACT_LIST.MARGIN_BOTTOM),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rightButton: size => ({
    width: size,
    height: size,
    backgroundColor: GLOBAL_COLOR.DANGER,
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center"
  }),
  textContainer: { width: "50%", height: "70%" }
};

export { contactListStyle };
