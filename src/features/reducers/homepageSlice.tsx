import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {ProjectDOM} from "../../database";


export interface homepageState {
  currentHomepage: Object;
}

const initialState: homepageState = {
  currentHomepage: ProjectDOM.mainEntry[0],
};


export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCurrentHomepage: (state, action) => {
      state.currentHomepage = ProjectDOM.mainEntry.filter((item)=> item.homepage.id === action.payload)[0]
    },
  },

});

export const { setCurrentHomepage } = homepageSlice.actions;

export const selectHomepage = (state: RootState) => state.homepage.currentHomepage;

export default homepageSlice.reducer;
