import { combineReducers } from "redux";
import { contactListReducer } from "../pages/contact/reducer";
import { detailedContactReducer } from "../pages/contactDetailed/reducer";

const rootReducer = combineReducers({
  contact: contactListReducer,
  detailed: detailedContactReducer
});

export { rootReducer };
