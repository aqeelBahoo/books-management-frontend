import BookList from "./features/book-list/BookList";
import Filters from "./features/filters/Filters";

function App() {
  return (
    <div className="container-fluid mt-3">
      <Filters />
      <BookList />
    </div>
  );
}

export default App;
