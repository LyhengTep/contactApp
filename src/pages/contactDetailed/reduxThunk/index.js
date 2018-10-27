import { getDetailedContact, addDetailedContactName } from "../action";
import _ from "lodash";
import { deleteContact } from "../../contact/actions";
import { deleteItem } from "../../../lib";
const thunkGetContactHistory = id => {
  return (dispatch, getState) => {
    let { contact } = getState();
    let detailed = _.filter(_.get(contact, "contactList"), contact => {
      return contact.id == id;
    });

    console.log("this is detailed ====>", detailed);
    dispatch(getDetailedContact(detailed));
    dispatch(addDetailedContactName(detailed[0].name));
  };
};

const thunkDeleteContact = removedContact => {
  return (dispatch, getState) => {
    let { detailed } = getState();
    let { detailedContact } = detailed;
    let afterDeletedDetail = deleteItem(detailedContact, removedContact);
    dispatch(deleteContact(removedContact));
    dispatch(getDetailedContact(afterDeletedDetail));
  };
};
export { thunkGetContactHistory, thunkDeleteContact };
