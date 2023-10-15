import { createSlice } from "@reduxjs/toolkit";
import { IInitStoreSlice } from "./types";

const initialState: IInitStoreSlice = {
    initStore: "init store",
};

export const initStoreSlice = createSlice({
    name: "initStore",
    initialState,
    reducers: {},
});

export const { actions: initStoreActions } = initStoreSlice;
export const { reducer: initStoreReducer } = initStoreSlice;
