import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { list: null, form: null, book: null };

const getBooks = createAsyncThunk("books/all", async (_, { getState }) => {
  const state: any = getState();
  const params = state.books.form;
  const response = await axios.get("http://localhost:3000/book/search", {
    params,
  });
  return response.data;
});

const getBook = createAsyncThunk("book", async (_) => {
  const id = window.location.pathname.split("/")[2];
  const response = await axios.get(`http://localhost:3000/book/search/${id}`);
  return response.data;
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    onFormFieldChange: (state: any, { payload }) => {
      state.form = { ...state.form, ...payload };
    },
    onClear: (state: any) => {
      state.form = initialState.form;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
    builder.addCase(getBook.fulfilled, (state, { payload }) => {
      state.book = payload;
    });
  },
});

export { bookSlice, getBooks, getBook };
