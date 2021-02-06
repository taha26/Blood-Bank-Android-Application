import reducer from "./Reducer/Reducer";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
// import combineReducers from './Reducer/index'

// const store = createStore(reducer,{},applyMiddleware(thunk));
// const store = createStore(reducer);
const store = createStore(reducer,applyMiddleware(thunk));

// const rootReducer = combineReducers({
//     root: reducer
// });

// const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;