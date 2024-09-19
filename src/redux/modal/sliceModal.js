import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
    selectItem: {},
};

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        openModal(state, action) {
            state.isModalOpen = true;
            state.selectItem = action.payload;
        },
        closeModal() {
            return initialState;
        },
    },
})

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;