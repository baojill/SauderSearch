import { createStore } from "redux";
import courseReducer from "./course/courseReducer";

const store = createStore(courseReducer);

export default store;
