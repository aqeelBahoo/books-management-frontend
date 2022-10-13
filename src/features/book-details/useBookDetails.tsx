const useBookDetailsState = (useSelector: any, dispatch: any, actions: any) => {
  const state = useSelector(
    (s: { books: { list: Array<any>; book: any } }) => ({ book: s.books.book })
  );

  const getBook = async () => {
    await dispatch(actions.getBook());
  };

  return { ...state, getBook };
};

export default useBookDetailsState;
