import { createAsyncThunk } from '@reduxjs/toolkit';

export const setName = createAsyncThunk('user/setName', async () => {
  
     return new Promise((resolve) => {
          setTimeout(() => {
               resolve('John Doe');
          }, 500);
     });
});
