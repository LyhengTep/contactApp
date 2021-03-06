import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

let store = createStore(rootReducer, applyMiddleware(logger, thunk));

export { store };
