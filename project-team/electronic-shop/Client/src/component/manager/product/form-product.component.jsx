import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function FormProduct({ show, onHide, mode, item, baseUrl, onSave }) {
  const [name, setName] = useState('')
  const [sku, setSku] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState('')
  const [price, setPrice] = useState('')
  const [brandId, setBrandId] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [status, setStatus] = useState('active')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (show && (mode === 'Edit' || mode === 'View')) {
      setName(item?.name || '')
      setSku(item?.sku || '')
      setDescription(item?.description || '')
      setImages((item?.images || []).join(', '))
      setPrice(item?.price != null ? item.price : '')
      setBrandId(item?.brand_id?._id || item?.brand_id || '')
      setCategoryId(item?.category_id?._id || item?.category_id || '')
      setStatus(item?.status || 'active')
    } else if (show) {
      setName('')
      setSku('')
      setDescription('')
      setImages('')
      setPrice('')
      setBrandId('')
      setCategoryId('')
      setStatus('active')
      setError('')
    }
  }, [show, mode, item])

  const handleSave = async () => {
    setSaving(true)
    setError('')
    const payload = {
      name,
      sku,
      description,
      images: images.split(',').map((url) => url.trim()).filter(Boolean),
      price: Number(price),
      brand_id: brandId,
      category_id: categoryId,
      status,
    }
    try {
      if (mode === 'Add') {
        await axios.post(baseUrl, payload)
      } else if (mode === 'Edit') {
        const id = item?._id
        if (!id) throw new Error('Missing product id for update')
        await axios.put(`${baseUrl}/${id}`, payload)
      }
      onSave?.()
      onHide()
    } catch (err) {
      setError(err.response?.data?.ERROR || err.response?.data?.error || err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{mode === 'Add' ? 'Add Product' : mode === 'Edit' ? 'Edit Product' : 'View Product'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form>
          <Form.Group className="mb-3" controlId="productForm.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              disabled={mode === 'View'}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productForm.SKU">
            <Form.Label>SKU</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter SKU"
              value={sku}
              disabled={mode === 'View'}
              onChange={(e) => setSku(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productForm.Description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={description}
              disabled={mode === 'View'}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="productForm.BrandId">
                <Form.Label>Brand ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter brand id"
                  value={brandId}
                  disabled={mode === 'View'}
                  onChange={(e) => setBrandId(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="productForm.CategoryId">
                <Form.Label>Category ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category id"
                  value={categoryId}
                  disabled={mode === 'View'}
                  onChange={(e) => setCategoryId(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="productForm.Price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  value={price}
                  disabled={mode === 'View'}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="productForm.Status">
                <Form.Label>Status</Form.Label>
                <Form.Select value={status} disabled={mode === 'View'} onChange={(e) => setStatus(e.target.value)}>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                  <option value="draft">draft</option>
                  <option value="out_of_stock">out_of_stock</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="productForm.Images">
            <Form.Label>Images</Form.Label>
            <Form.Control
              type="text"
              placeholder="Comma-separated image URLs"
              value={images}
              disabled={mode === 'View'}
              onChange={(e) => setImages(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        {mode !== 'View' && (
          <Button variant="primary" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving…' : 'Save Changes'}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export default FormProduct