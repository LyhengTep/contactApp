import { DEVICE } from "../themes";
import _ from "lodash";
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scaler = size => (DEVICE.WIDTH / guidelineBaseWidth) * size;
const pixelScaler = (size, factor = 0.5) =>
  size + (scaler(size) - size) * factor;

const deleteItem = (list = [], item) => {
  let data = _.filter(list, listItem => listItem != item);
  return data;
};

const searchName = (list, nameToSearch) => {
  let foundName = _.filter(list, listItem => {
    let tempName = listItem.name.toLowerCase();
    nameToSearch = nameToSearch.toLowerCase();
    let findName = tempName.indexOf(nameToSearch);
    return findName != -1 ? true : false;
  });

  return foundName;
};
export { scaler, pixelScaler, deleteItem, searchName };
