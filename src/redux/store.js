import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import middleware from './middleware';
import usersReducer from './users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistedStore = persistStore(store);
