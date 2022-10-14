import { Card, Row, Col, Image } from "react-bootstrap";
import { Book } from "../../interfaces/book";
const BookDetails = ({ book }: { book: Book }) => {
  return (
    <div className="container">
      <h1>Book Details</h1>
      <Row>
        <Col>
          <Image
            src={book?.thumbnailUrl}
            fluid
            thumbnail
            style={{
              width: "400px",
              height: "600px",
              objectFit: "cover",
              objectPosition: "bottom",
            }}
          />
        </Col>
        <Col>
          <Card className="mb-5" style={{ width: "100%", height: "auto" }}>
            <Card.Body>
              <Card.Title>{book?.title}</Card.Title>

              <h5>Authors</h5>
              <Card.Text>{book?.authors?.toString()}</Card.Text>

              <h5>Categories</h5>
              <Card.Text>{book?.categories?.toString()}</Card.Text>

              <h5>Page Count</h5>
              <Card.Text>{book?.pageCount}</Card.Text>

              <h5>Published Date</h5>
              <Card.Text>
                {book?.published
                  ? new Date(book?.published?.$date).toDateString()
                  : ""}
              </Card.Text>

              <h5>Price</h5>
              <Card.Text>{book?.published?.price}</Card.Text>

              <h5>Status</h5>
              <Card.Text>{book?.status}</Card.Text>

              <h5>Description</h5>
              <Card.Text>{book?.shortDescription}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BookDetails;
