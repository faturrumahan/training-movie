import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import watchListReducer from "@/reducer/watchListSlice";

// Define the persist config for the root reducer
const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["watchList"], // Only persist the watchList slice
};

// Create the root reducer
const rootReducer = combineReducers({
  watchList: watchListReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {watchList: WatchListState}
export type AppDispatch = typeof store.dispatch;
