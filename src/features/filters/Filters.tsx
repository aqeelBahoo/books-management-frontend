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

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                min="1900"
                max="2099"
                step="1"
                placeholder="Enter Year"
                value={form.year || ""}
                onChange={(e) =>
                  onFormFieldChange({ year: e.target.value?.trim() })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Full Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Full Date"
                value={form.fullDate || ""}
                onChange={(e) =>
                  onFormFieldChange({ fullDate: e.target.value?.trim() })
                }
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-3">
          <Button variant="secondary" onClick={onClear} className="me-3">
            Clear
          </Button>

          <Button variant="primary" onClick={onSubmit}>
            Search
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Filters;
