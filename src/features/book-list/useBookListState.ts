import { Book } from "../../interfaces/book";

const useBookListState = (useSelector: any, dispatch: any, actions: any) => {
  const state = useSelector((s: { books: { list: Array<Book> } }) => ({
    list: s.books.list,
  }));

  const getBooks = async () => {
    await dispatch(actions.getBooks());
  };

  return { ...state, getBooks };
};

export default useBookListState;
