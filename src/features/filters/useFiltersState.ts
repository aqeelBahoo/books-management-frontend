const useFilterState = (useSelector: any, dispatch: any, actions: any) => {
  const state = useSelector((s: any) => ({ form: s.books.form || {} }));

  const onFormFieldChange = (field: any) => {
    dispatch(actions.onFormFieldChange(field));
  };

  const onSubmit = async () => {
    await dispatch(actions.getBooks());
  };

  const onClear = () => {
    dispatch(actions.onClear());
  };

  return { ...state, onFormFieldChange, onSubmit, onClear };
};

export default useFilterState;
