import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Book } from "../../interfaces/book";

const BookList = ({ list }: { list: Array<Book> }) => {
  return (
    <div className="mt-5" style={{ height: "500px", overflow: "auto" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Authors</th>
            <th>Categories</th>
            <th>Image</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((l: any, i: number) => {
            return (
              <tr key={i}>
                <td>
                  <Link to={`details/${l.id}`}> {l.id}</Link>
                </td>
                <td>{l.title}</td>
                <td>{l.published?.price}</td>
                <td>{l.authors?.toString()}</td>
                <td>{l.categories?.toString()}</td>
                <td>
                  <img alt="book" src={l.thumbnailUrl} />
                </td>
                <td>{l.shortDescription}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default BookList;
