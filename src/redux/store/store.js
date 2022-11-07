import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../slices/imageSlice/imageSlice';

const store = configureStore(
  {
    reducer: {
      image: imageReducer,
    },
  }
);

export default store;