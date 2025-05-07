import { createSlice } from "@reduxjs/toolkit";
import { setName } from './actions';

const initialState = {
     loading: false,
     error: null,
     basic: null,
};

const BasicSlice = createSlice({
     name: 'Basic',
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(setName.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(setName.fulfilled, (state, action) => {
                    state.loading = false;
                    state.basic = action.payload;
               })
               .addCase(setName.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
               });
     }
});

export default BasicSlice.reducer;