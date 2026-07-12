import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ProductDetailForm({ show, onHide }) {
  return (
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="userForm.Name">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.Email">
              <Form.Label>Spec / Variant</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.Role">
              <Form.Label>Stock</Form.Label>
              <Form.Select defaultValue="User">
                <option>User</option>
                <option>Admin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.Status">
              <Form.Label>Status</Form.Label>
              <Form.Select defaultValue="Active">
                <option>Active</option>
                <option>Inactive</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ProductDetailForm
