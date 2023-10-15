import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { initStoreReducer } from "./initStoreSlice";

const rootReducer = combineReducers({
    initStore: initStoreReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export { store };
