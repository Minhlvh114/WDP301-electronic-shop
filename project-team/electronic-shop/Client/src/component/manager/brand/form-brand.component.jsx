import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

function BrandForm({ show, onHide, mode, item, baseUrl, onSave }) {
  const [name, setName] = useState('')
  const [logoImg, setLogoImg] = useState('')
  const [status, setStatus] = useState('active')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (show && (mode === 'Edit' || mode === 'View')) {
      setName(item?.name || '')
      setLogoImg(item?.logo_img || '')
      setStatus(item?.status || 'active')
    } else if (show) {
      setName('')
      setLogoImg('')
      setStatus('active')
      setError('')
    }
  }, [show, mode, item])

  const handleSave = async () => {
    setSaving(true)
    setError('')
    const payload = { name, img_url: logoImg, status }
    try {
      if (mode === 'Add') {
        console.log(payload);
        
        await axios.post(`${baseUrl}/add`, payload)
      } else if (mode === 'Edit') {
        const id = item?._id
        if (!id) throw new Error('Missing brand id for update')
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
        <Modal.Title>{mode === 'Add' ? 'Add Brand' : mode === 'Edit' ? 'Edit Brand' : 'View Brand'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form>
          <Form.Group className="mb-3" controlId="brandForm.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter brand name"
              value={name}
              disabled={mode === 'View'}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="brandForm.Logo">
            <Form.Label>Logo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter logo image URL"
              value={logoImg}
              disabled={mode === 'View'}
              onChange={(e) => setLogoImg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="brandForm.Status">
            <Form.Label>Status</Form.Label>
            <Form.Select value={status} disabled={mode === 'View'} onChange={(e) => setStatus(e.target.value)}>
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </Form.Select>
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

export default BrandForm