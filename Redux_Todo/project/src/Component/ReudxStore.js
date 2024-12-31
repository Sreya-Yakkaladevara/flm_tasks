import { legacy_createStore } from "redux";
import intialFunction from "./intialFunction";
const intialValue = {
    count:0,
    Todo:[]
    
}
export const store = legacy_createStore(intialFunction,intialValue);