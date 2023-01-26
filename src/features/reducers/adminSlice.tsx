import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {ProjectDOM} from "../../database";


export interface adminState {
  openAdminMode: boolean;
}

const initialState: adminState = {
    openAdminMode: false
};

console.log(window.location);



export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setOpenAdminMode: (state, action) => {
      state.openAdminMode = action.payload
    },
  },

});

export const { setOpenAdminMode } = adminSlice.actions;

export const selectAdmin = (state: RootState) => state.admin;

export default adminSlice.reducer;
