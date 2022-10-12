import BookListWrapper from "./features/book-list/BookListWrapper";
import FilterWrapper from "./features/filters/FilterWrapper";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="container-fluid mt-3">
      <Provider store={store}>
        <FilterWrapper />
        <BookListWrapper />
      </Provider>
    </div>
  );
}

export default App;
