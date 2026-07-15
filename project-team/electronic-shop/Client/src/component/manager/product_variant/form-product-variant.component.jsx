import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProductVariantForm({ show, onHide, mode, item, onSave }) {
  const [productId, setProductId] = useState('')
  const [productName, setProductName] = useState('')
  const [sku, setSku] = useState('')
  const [variantName, setVariantName] = useState('')
  const [color, setColor] = useState('')
  const [storage, setStorage] = useState('')
  const [ram, setRam] = useState('')
  const [attributesJson, setAttributesJson] = useState('')
  const [images, setImages] = useState('')
  const [price, setPrice] = useState('')
  const [salePrice, setSalePrice] = useState('')
  const [stockQuantity, setStockQuantity] = useState('')
  const [reservedQuantity, setReservedQuantity] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (show && (mode === 'Edit' || mode === 'View')) {
      setProductId(item?.product_id?._id || item?.product_id || '')
      setProductName(item?.product_id?.name || item?.productName || '')
      setSku(item?.sku || '')
      setVariantName(item?.variant_name || '')
      setColor(item?.color || '')
      setStorage(item?.storage || '')
      setRam(item?.ram || '')
      setAttributesJson(item?.attributes_json ? JSON.stringify(item.attributes_json, null, 2) : '')
      setImages((item?.images || []).join(', '))
      setPrice(item?.price != null ? item.price : '')
      setSalePrice(item?.sale_price != null ? item.sale_price : '')
      setStockQuantity(item?.stock_quantity != null ? item.stock_quantity : '')
      setReservedQuantity(item?.reserved_quantity != null ? item.reserved_quantity : '')
      setIsActive(item?.is_active ?? true)
    } else if (show) {
      setProductId('')
      setProductName('')
      setSku('')
      setVariantName('')
      setColor('')
      setStorage('')
      setRam('')
      setAttributesJson('')
      setImages('')
      setPrice('')
      setSalePrice('')
      setStockQuantity('')
      setReservedQuantity('')
      setIsActive(true)
      setError('')
    }
  }, [show, mode, item])

  const handleSave = () => {
    setSaving(true)
    setError('')

    let parsedAttributes = {}
    if (attributesJson) {
      try {
        parsedAttributes = JSON.parse(attributesJson)
      } catch (err) {
        setError('Invalid JSON in attributes field')
        setSaving(false)
        return
      }
    }

    const variant = {
      _id: item?._id,
      product_id: productId,
      productName,
      sku,
      variant_name: variantName,
      color,
      storage,
      ram,
      attributes_json: parsedAttributes,
      images: images.split(',').map((url) => url.trim()).filter(Boolean),
      price: Number(price),
      sale_price: salePrice === '' ? 0 : Number(salePrice),
      stock_quantity: stockQuantity === '' ? 0 : Number(stockQuantity),
      reserved_quantity: reservedQuantity === '' ? 0 : Number(reservedQuantity),
      is_active: isActive,
    }

    onSave?.(variant)
    setSaving(false)
  }

  const disabled = mode === 'View'

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{mode === 'Add' ? 'Add Product Variant' : mode === 'Edit' ? 'Edit Product Variant' : 'View Product Variant'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="variantForm.ProductId">
                <Form.Label>Product ID</Form.Label>
                <Form.Control
                  type="text"
                  value={productId}
                  disabled={disabled}
                  onChange={(e) => setProductId(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="variantForm.ProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  value={productName}
                  disabled={disabled}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="variantForm.SKU">
                <Form.Label>SKU</Form.Label>
                <Form.Control
                  type="text"
                  value={sku}
                  disabled={disabled}
                  onChange={(e) => setSku(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="variantForm.VariantName">
                <Form.Label>Variant Name</Form.Label>
                <Form.Control
                  type="text"
                  value={variantName}
                  disabled={disabled}
                  onChange={(e) => setVariantName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="variantForm.Color">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  value={color}
                  disabled={disabled}
                  onChange={(e) => setColor(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="variantForm.Storage">
                <Form.Label>Storage</Form.Label>
                <Form.Control
                  type="text"
                  value={storage}
                  disabled={disabled}
                  onChange={(e) => setStorage(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="variantForm.RAM">
                <Form.Label>RAM</Form.Label>
                <Form.Control
                  type="text"
                  value={ram}
                  disabled={disabled}
                  onChange={(e) => setRam(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="variantForm.AttributesJson">
            <Form.Label>Attributes JSON</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={attributesJson}
              disabled={disabled}
              onChange={(e) => setAttributesJson(e.target.value)}
              placeholder='{
  "cpu": "M3 Max",
  "display": "16-inch"
}'
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="variantForm.Images">
            <Form.Label>Images</Form.Label>
            <Form.Control
              type="text"
              value={images}
              disabled={disabled}
              onChange={(e) => setImages(e.target.value)}
              placeholder="Comma-separated image URLs"
            />
          </Form.Group>

          <Row>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="variantForm.Price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={price}
                  disabled={disabled}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="variantForm.SalePrice">
                <Form.Label>Sale Price</Form.Label>
                <Form.Control
                  type="number"
                  value={salePrice}
                  disabled={disabled}
                  onChange={(e) => setSalePrice(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3" controlId="variantForm.StockQuantity">
                <Form.Label>Stock Quantity</Form.Label>
                <Form.Control
                  type="number"
                  value={stockQuantity}
                  disabled={disabled}
                  onChange={(e) => setStockQuantity(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="variantForm.ReservedQuantity">
                <Form.Label>Reserved Quantity</Form.Label>
                <Form.Control
                  type="number"
                  value={reservedQuantity}
                  disabled={disabled}
                  onChange={(e) => setReservedQuantity(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="variantForm.IsActive">
                <Form.Check
                  type="checkbox"
                  label="Active"
                  checked={isActive}
                  disabled={disabled}
                  onChange={(e) => setIsActive(e.target.checked)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        {mode !== 'View' && (
          <Button variant="primary" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving…' : 'Save Variant'}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export default ProductVariantForm
