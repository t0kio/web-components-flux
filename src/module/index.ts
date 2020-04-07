import { combineReducers, createStore } from "redux";
import { counterReducer } from "./count";

const rootReducer = combineReducers({ counter: counterReducer });

export const rootStore = createStore(rootReducer);
