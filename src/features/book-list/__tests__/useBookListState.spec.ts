import useBookListState from "./../useBookListState";

test("The Correct State is Returned", () => {
  const useSelector = (cb: any) =>
    cb({
      books: {
        form: null,
        list: null,
      },
    });

  const dispatch = jest.fn();
  const useDispatch = () => dispatch;

  const actions = {};

  const state = useBookListState(useSelector, useDispatch, actions);
  expect(state.list).toBe(null);
});

test("GET book list endpoint should be called", () => {
  const useSelector = (cb: any) =>
    cb({
      books: {
        form: null,
        list: null,
      },
    });

  const dispatch = jest.fn();
  const useDispatch = () => dispatch;

  const actions = { getBooks: jest.fn() };

  const state = useBookListState(useSelector, useDispatch, actions);
  state.getBooks();
  expect(actions.getBooks).toBeCalled();
});
