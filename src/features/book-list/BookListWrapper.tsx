import { useSelector, useDispatch } from "react-redux";
import BookList from "./BookList";
import useBookListState from "./useBookListState";
import { actions } from "./../../store";
import { useEffect } from "react";

const BookListWrapper = () => {
  const dispatch = useDispatch();

  const state = useBookListState(useSelector, dispatch, actions);

  useEffect(() => {
    state.getBooks();
  }, []);

  return <BookList {...state} />;
};

export default BookListWrapper;
