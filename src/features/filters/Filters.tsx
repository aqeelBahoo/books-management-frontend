import { Button, Form, Row, Col } from "react-bootstrap";

const Filters = ({ onSubmit, onFormFieldChange, onClear, form }: any) => {
  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={form.title || ""}
                onChange={(e) =>
                  onFormFieldChange({ title: e.target.value?.trim() })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Author"
                value={form.author || ""}
                onChange={(e) =>
                  onFormFieldChange({ author: e.target.value?.trim() })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Price"
                value={form.price || ""}
                onChange={(e) =>
                  onFormFieldChange({ price: e.target.value?.trim() })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                value={form.category || ""}
                onChange={(e) =>
                  onFormFieldChange({ category: e.target.value?.trim() })
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="secondary" onClick={onClear}>
          Clear
        </Button>

        <Button variant="primary" onClick={onSubmit}>
          Search
        </Button>
      </Form>
    </>
  );
};

export default Filters;
