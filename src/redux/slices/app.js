import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "App",
    initialState: {
        modalId: null
    },
    reducers: {
        setModalId: (state, action) => {
            state.modalId = action.payload;
        }
    }
});

export const { setModalId } = appSlice.actions;

export default appSlice.reducer;
