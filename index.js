import { addTodoActionCreator, addUserActionCreator } from "./actionCreator.js";
import store from "./store.js";

console.log(store.getState());

store.dispatch(addTodoActionCreator("Learn Redux"));
console.log(store.getState().todoState);
store.dispatch(addUserActionCreator({ name: "John", age: 30 }));
console.log(store.getState().userState);
