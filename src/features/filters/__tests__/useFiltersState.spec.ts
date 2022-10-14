import useFilterState from "./../useFiltersState";

test("The Correct State is Returned", () => {
  const useSelector = (cb: any) =>
    cb({
      books: {
        form: null,
      },
    });

  const dispatch = jest.fn();
  const useDispatch = () => dispatch;

  const actions = {};

  const state = useFilterState(useSelector, useDispatch, actions);
  expect(JSON.stringify(state.form)).toBe(JSON.stringify({}));
});

test("onFormFieldChange action change the form field value", () => {
  const useSelector = (cb: any) =>
    cb({
      books: {
        form: null,
      },
    });

  const dispatch = jest.fn();
  const useDispatch = () => dispatch;

  const actions = { onFormFieldChange: jest.fn() };

  const state = useFilterState(useSelector, useDispatch, actions);
  state.onFormFieldChange({ title: "test title" });
  expect(actions.onFormFieldChange).toBeCalledWith({ title: "test title" });
});

test("onSubmit action perform the get books endpoint with params", () => {
  const useSelector = (cb: any) =>
    cb({
      books: {
        form: null,
      },
    });

  const dispatch = jest.fn();
  const useDispatch = () => dispatch;

  const actions = { getBooks: jest.fn() };

  const state = useFilterState(useSelector, useDispatch, actions);
  state.onSubmit();
  expect(actions.getBooks).toBeCalled();
});

test("onClear action reset the form", () => {
  const useSelector = (cb: any) =>
    cb({
      books: {
        form: null,
      },
    });

  const dispatch = jest.fn();
  const useDispatch = () => dispatch;
  const actions = { onClear: jest.fn() };
  const state = useFilterState(useSelector, useDispatch, actions);
  state.onClear();
  expect(actions.onClear).toBeCalled();
});
