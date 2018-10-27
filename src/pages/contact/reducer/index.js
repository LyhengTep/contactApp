import {
  GET_CONTACT_LIST,
  DELETE_CONTACT,
  GET_SEARCH_INPUT,
  SEARCH_BAR_BLUR,
  SEARCH_BAR_FOCUS,
  SEARCH_BAR_RIGHT_ICON_PRESS
} from "../actions";
import _ from "lodash";
import { deleteItem, searchName } from "../../../lib";
const initialState = {
  contactList: [],
  searchResult: [],
  isSearching: false,
  searchText: "",
  isBlur: true
};

const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT_LIST:
      return {
        ...state,
        contactList: _.get(action, "payload.data")
      };

    case DELETE_CONTACT:
      let oldContactList = state.contactList;
      let searchResult = [];
      if (state.searchText.length > 0) {
        searchResult = deleteItem(state.searchResult, action.payload);
      }
      let filterContactList = deleteItem(oldContactList, action.payload);

      return {
        ...state,
        contactList: filterContactList,
        searchResult
      };

    case GET_SEARCH_INPUT:
      searchResult = searchName(state.contactList, action.payload);
      return {
        ...state,
        searchText: action.payload,
        searchResult
      };

    case SEARCH_BAR_FOCUS:
      return {
        ...state,
        isSearching: true,
        isBlur: false
      };

    case SEARCH_BAR_BLUR:
      return {
        ...state,
        isSearching: state.searchText.length > 0 ? true : false,
        isBlur: true
      };
    case SEARCH_BAR_RIGHT_ICON_PRESS:
      let searchText = "";
      let isSearching = true;
      if (state.searchText.length > 0) {
        searchText = "";
      }
      if (state.isBlur) {
        isSearching = false;
      }
      return {
        ...state,
        searchText,
        searchResult,
        isSearching
      };
    default:
      return {
        ...state
      };
  }
};

export { contactListReducer };
