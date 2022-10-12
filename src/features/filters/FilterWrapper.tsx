import Filters from "./Filters";
import { useSelector, useDispatch } from "react-redux";
import useFilterState from "./useFiltersState";
import { actions } from "./../../store";

const FilterWrapper = () => {
  const dispatch = useDispatch();
  const state = useFilterState(useSelector, dispatch, actions);

  return <Filters {...state} />;
};

export default FilterWrapper;
