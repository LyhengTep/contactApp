const GET_DETAILED_CONTACT = "GET_DETAILED_CONTACT";
const ADD_DETAILED_CONTACT_NAME = "ADD_DETAILED_CONTACT_NAME";
const getDetailedContact = payload => {
  return {
    type: GET_DETAILED_CONTACT,
    payload
  };
};

const addDetailedContactName = payload => {
  return {
    type: ADD_DETAILED_CONTACT_NAME,
    payload
  };
};
export {
  getDetailedContact,
  addDetailedContactName,
  GET_DETAILED_CONTACT,
  ADD_DETAILED_CONTACT_NAME
};
