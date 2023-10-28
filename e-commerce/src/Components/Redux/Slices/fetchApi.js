import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchingData = createAsyncThunk('fetchingData', async (arg) => {
    let url = 'https://fakestoreapi.com/products';

    if (arg) {
        url += `/${arg}`
    }

    const response = await fetch(url);
    return response.json();
})

const initialState = { isLoading: false, data: [], isError: false }

const fetchDataSlice = createSlice({
    name: 'Data Fetching',
    initialState: initialState,
    extraReducers: (buider) => {
        buider.addCase(fetchingData.pending, (state, action) => {
            state.isLoading = true;
        })
        buider.addCase(fetchingData.fulfilled, (state, action) => {
            console.log('\n\n\n......... fulfilled .......', action.payload)
            state.isLoading = false;
            state.data = [...action.payload]
        });
        buider.addCase(fetchingData.rejected, (state, action) => {
            console.log('Error', action.payload);
            state.isError = true
        })
    }
})

export default fetchDataSlice.reducer;