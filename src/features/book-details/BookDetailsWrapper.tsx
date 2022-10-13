import { useEffect } from "react";
import { actions } from "./../../store";
import BookDetails from "./BookDetails";
import useBookDetailsState from "./useBookDetails";
import { useSelector, useDispatch } from "react-redux";

const BookDetailsWrapper = () => {
  const dispatch = useDispatch();

  const state = useBookDetailsState(useSelector, dispatch, actions);

  useEffect(() => {
    state.getBook();
  }, []);

  return <BookDetails {...state} />;
};

export default BookDetailsWrapper;
