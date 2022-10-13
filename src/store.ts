import { configureStore } from "@reduxjs/toolkit";
import { bookSlice, getBooks, getBook } from "./data/booksSlice";

export default configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
});

const actions = { ...bookSlice.actions, getBooks, getBook };

export { actions };
