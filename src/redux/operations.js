import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://66c73a9d732bf1b79fa5d101.mockapi.io/';
axios.defaults.params = { page: 1, limit: 12 };

export const fetchRentCarsThunk = createAsyncThunk(
    'cars/fetchCarsList',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('adverts');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const loadMoreRentCarsThunk = createAsyncThunk(
    'cars/loadMoreCars',
    async (page, thunkAPI) => {
        try {
            const { data } = await axios.get('adverts', { params: { page } })
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)