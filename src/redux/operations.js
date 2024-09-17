import axios from "axios";
import { mockAPI, paginParams } from "../API";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = mockAPI;
axios.defaults.params = paginParams;

export const fetchRentCarsThunk = createAsyncThunk(
    'cars/fetchRentCars',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('advert');
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
            const { data } = await axios.get('advert', { params: { page } })
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);

        }
    }
)