import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tipService from "./tipService";

const initialState = {
  tips: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new tip
export const createTip = createAsyncThunk(
  "tips/create",
  async (tipData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await tipService.createTip(tipData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user tips
export const getTips = createAsyncThunk("tips/getAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await tipService.getTips(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const tipSlice = createSlice({
  name: "tip",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTip.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTip.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tips.push(action.payload);
      })
      .addCase(createTip.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTips.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTips.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tips = action.payload;
      })
      .addCase(getTips.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = tipSlice.actions;
export default tipSlice.reducer;
