import { getContactList } from "../actions";

const thunkGetContactList = () => {
  return dispatch => {
    let contactList = require("../../../dataSource/index.json");
    dispatch(getContactList(contactList));
  };
};

export { thunkGetContactList };
