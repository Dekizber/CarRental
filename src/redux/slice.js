import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchRentCarsThunk, loadMoreRentCarsThunk } from "./operations";

const initialState = {
    items: [],
    favoriteItems: [],
    filteredItems: [],
    isLoading: false,
    isError: false,
};


export const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        carFilter: (state, action) => {
            const { make } = action.payload;
            make ? state.filteredItems = state.items.filter(car => car.make.toLowerCase() === make.toLowerCase()) : state.filteredItems = state.items;
        },
        handleFavorite: (state, action) => {
            const itemIdx = state.favoriteItems.findIndex((item) => item.id === action.payload.id);
            if (itemIdx !== -1) { state.favoriteItems.splice(itemIdx, 1) }
            else { state.favoriteItems.push(action.payload) };
        }
    },


    extraReducers: (builder) => {
        builder
            .addCase(fetchRentCarsThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.filteredItems = action.payload;
            })
            .addCase(loadMoreRentCarsThunk.fulfilled, (state, action) => {
                state.items.push(...action.payload);
                state.filteredItems.push(...action.payload);
            })
            .addMatcher(
                isAnyOf(fetchRentCarsThunk.pending, loadMoreRentCarsThunk.pending),
                (state) => { state.isLoading = true }
            )
            .addMatcher(
                isAnyOf(fetchRentCarsThunk.fulfilled, loadMoreRentCarsThunk.fulfilled),
                (state) => {
                    state.isError = false;
                    state.isLoading = false;
                }
            )

            .addMatcher(
                isAnyOf(fetchRentCarsThunk.rejected, loadMoreRentCarsThunk.rejected),
                (state, action) => {
                    state.isError = action.payload;
                    state.isLoading = false;
                }
            );
    }
}
)

export const rentCarReducer = carsSlice.reducer;
export const { handleFavorite, carFilter } = carsSlice.actions;