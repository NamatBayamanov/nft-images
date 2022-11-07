import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const imagesUrl = createAsyncThunk('image/imagesUrl', async function (_, {rejectWithValue}) {
  try {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
    if (!responce.ok) {
      throw new Error(`Can't take responce`);
    }
    const data = await responce.json();
    return data;

  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const imageSlice = createSlice(
  {
    name: 'image',
    initialState: {
      images: [],
      status: null,
      error: null,
    },
    reducers: {
    },
    extraReducers: {
      [imagesUrl.pending]: (state, action) => {
        state.status = 'pending...';
        state.error = null;
      },
      [imagesUrl.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.images = action.payload;
      },
      [imagesUrl.rejected]: (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      },
    },
  },
);
export default imageSlice.reducer;