import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// frontend/src/index.js
// ... other imports
import { restoreCSRF, csrfFetch } from "./csrf";


const rootReducer = combineReducers({

});
let enhancer;
const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;

}
// ...
// frontend/src/store/index.js
// ...

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

// frontend/src/index.js
// ... other imports

// ... const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
}
export default configureStore;
