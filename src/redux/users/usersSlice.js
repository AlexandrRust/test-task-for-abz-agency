import { createSlice } from '@reduxjs/toolkit';
import userOperation from './usersOperatiron';

const initialState = {
  items: [],
  pages: 0,
};

const transactionsSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [userOperation.getUsersList.fulfilled] (state, action) {
       state.items = [...state.items, ...action.payload.users]
        state.pages = action.payload.totalPages
    }
    
  },
});

export default transactionsSlice.reducer;
