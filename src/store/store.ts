import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { persistedRootReducer, rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const middlewares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancers = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));

// export const store = createStore(persistedRootReducer, undefined, composedEnhancers);
export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(
    { serializableCheck: false }
  ).concat(middlewares),
  devTools: process.env.NODE_ENV !== "production",
});
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
