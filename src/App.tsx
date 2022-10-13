import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import BookListWrapper from "./features/book-list/BookListWrapper";
import FilterWrapper from "./features/filters/FilterWrapper";
import store from "./store";
import { Provider } from "react-redux";
import BookDetailsWrapper from "./features/book-details/BookDetailsWrapper";

function App() {
  return (
    <div className="container-fluid mt-3">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FilterWrapper />
                  <BookListWrapper />
                </>
              }
            />

            <Route path="/details/:id" element={<BookDetailsWrapper />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
