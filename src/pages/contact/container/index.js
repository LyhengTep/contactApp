import { connect } from "react-redux";
import Contact from "../components/Contact";
import { thunkGetContactList } from "../reduxThunk";
import {
  deleteContact,
  getSearchInput,
  onSearchBarFocus,
  onSearchBarBlur,
  onSearBarRightIconPress
} from "../actions";

const mapStateToProps = state => {
  return {
    contactList: state.contact.contactList,
    isSearching: state.contact.isSearching,
    searchResult: state.contact.searchResult,
    searchText: state.contact.searchText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    thunkGetContactList: () => dispatch(thunkGetContactList()),
    deleteContact: contact => dispatch(deleteContact(contact)),
    getSearchInput: text => dispatch(getSearchInput(text)),
    onSearchBarFocus: focus => dispatch(onSearchBarFocus(focus)),
    onSearchBarBlur: blur => dispatch(onSearchBarBlur(blur)),
    onSearBarRightIconPress: () => dispatch(onSearBarRightIconPress())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
