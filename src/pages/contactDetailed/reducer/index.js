import { GET_DETAILED_CONTACT, ADD_DETAILED_CONTACT_NAME } from "../action";

const initialState = {
  detailedContact: [],
  name: ""
};

const detailedContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILED_CONTACT:
      return {
        ...state,
        detailedContact: action.payload
      };
    case ADD_DETAILED_CONTACT_NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export { detailedContactReducer };
