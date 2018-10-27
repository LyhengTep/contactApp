const GET_CONTACT_LIST = "GET_CONTACT_LIST";
const DELETE_CONTACT = "DELETE_CONTACT";
const GET_SEARCH_INPUT = "GET_SEARCH_INPUT";
const SEARCH_BAR_FOCUS = "SEARCH_BAR_FOCUS";
const SEARCH_BAR_BLUR = "SEARCH_BAR_BLUR";
const SEARCH_BAR_RIGHT_ICON_PRESS = "SEARCH_BAR_RIGHT_ICON_PRESS";
const getContactList = payload => {
  return {
    type: GET_CONTACT_LIST,
    payload
  };
};

const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload
  };
};

const getSearchInput = payload => {
  return {
    type: GET_SEARCH_INPUT,
    payload
  };
};

const onSearchBarFocus = payload => {
  return {
    type: SEARCH_BAR_FOCUS,
    payload
  };
};
const onSearchBarBlur = payload => {
  return {
    type: SEARCH_BAR_BLUR,
    payload
  };
};

const onSearBarRightIconPress = () => {
  return {
    type: SEARCH_BAR_RIGHT_ICON_PRESS
  };
};
export {
  getContactList,
  deleteContact,
  getSearchInput,
  onSearchBarFocus,
  onSearchBarBlur,
  onSearBarRightIconPress,
  GET_CONTACT_LIST,
  DELETE_CONTACT,
  GET_SEARCH_INPUT,
  SEARCH_BAR_FOCUS,
  SEARCH_BAR_BLUR,
  SEARCH_BAR_RIGHT_ICON_PRESS
};
