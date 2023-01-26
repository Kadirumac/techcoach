import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import adminMode from '../features/reducers/adminSlice';
import currentHomepage from '../features/reducers/homepageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    homepage: currentHomepage,
    admin: adminMode
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
