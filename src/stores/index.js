import { createStore, applyMiddleware } from "redux";

const reducer = (state = '', action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return 
    default:
      return state
  }
}
const middleware = [];
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;