import { combineReducers, createStore } from 'redux';
import todoReducer from './todoReducer.js';
import userReducer from './userReducer.js';


const rootReducer = combineReducers({ // create root reducer function which will return an object of store type from redux library.
    todoState: todoReducer,
    userState: userReducer
});

const store = createStore(rootReducer); // create store with root reducer function and store it in store variable of type object of store type from redux library.

store.subscribe(() => { // subscribe to store changes and print it in console using console.log function from console library in node.
    console.log(store.getState());
});

export default store;   