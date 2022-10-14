import { Book } from "../../interfaces/book";

const useBookDetailsState = (useSelector: any, dispatch: any, actions: any) => {
  const state = useSelector(
    (s: { books: { list: Array<Book>; book: Book } }) => ({
      book: s.books.book,
    })
  );

  const getBook = async () => {
    await dispatch(actions.getBook());
  };

  return { ...state, getBook };
};

export default useBookDetailsState;
