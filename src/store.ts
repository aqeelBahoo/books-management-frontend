import { configureStore } from "@reduxjs/toolkit";
import { bookSlice, getBooks } from "./data/booksSlice";

export default configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
});

const actions = { ...bookSlice.actions, getBooks };

export { actions };
