import useBookDetailsState from "./../useBookDetails";

test("The Correct State is Returned", () => {
  const useSelector = (cb: any) =>
    cb({
      books: {
        book: null,
      },
    });

  const dispatch = jest.fn();
  const useDispatch = () => dispatch;

  const actions = {};

  const state = useBookDetailsState(useSelector, useDispatch, actions);
  expect(state.book).toBe(null);
});

test("GET book endpoint should be called", () => {
  const useSelector = (cb: any) =>
    cb({
      books: {
        form: null,
        list: null,
      },
    });

  const dispatch = jest.fn();
  const useDispatch = () => dispatch;

  const actions = { getBook: jest.fn() };

  const state = useBookDetailsState(useSelector, useDispatch, actions);
  state.getBook();
  expect(actions.getBook).toBeCalled();
});
