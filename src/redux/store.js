 import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import reTable from "./reducers/acTable";

const reducers = combineReducers({
    reTable
})

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

 export default store;