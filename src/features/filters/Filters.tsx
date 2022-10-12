import { Button, Form, Row, Col } from "react-bootstrap";

const Filters = () => {
  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="Enter Author" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Price" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Enter Category" />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
};

export default Filters;
