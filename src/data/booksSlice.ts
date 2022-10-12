import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { list: null, form: null };

const getBooks = createAsyncThunk("books/all", async (_, { getState }) => {
  const state: any = getState();
  const params = state.books.form;
  const response = await axios.get("http://localhost:3000/books", {
    params,
  });
  return response.data;
});

const bookSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    onFormFieldChange: (state: any, { payload }) => {
      state.form = { ...state.form, ...payload };
    },
    onClear: (state: any, { payload }) => {
      state.form = initialState.form;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
  },
});

export { bookSlice, getBooks };
