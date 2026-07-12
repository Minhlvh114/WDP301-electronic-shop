import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'




function FormUser({ show, onHide, mode, user }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")
  const [role, setRole] = useState("")
  const [passwordHash, setPasswordHash] = useState("")
  const [phone, setPhone] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")
  const [roleId, setRoleId] = useState("")
  const [addresses, setAddresses] = useState("")
  const [emailVerified, setEmailVerified] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")
  const [verificationCodeExpires, setVerificationCodeExpires] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (mode === 'View' || mode === 'Edit') {
      setName(user?.name || '')
      setEmail(user?.email || '')
      setStatus(user?.status ? String(user.status).toUpperCase() : '')
      setRole(user?.role ? String(user.role).toUpperCase() : '')
      setPasswordHash(user?.passwordHash || '')
      setPhone(user?.phone || '')
      setAvatarUrl(user?.avatarUrl || '')
      setRoleId(user?.roleId || '')
      setAddresses(user?.addresses ? JSON.stringify(user.addresses, null, 2) : '')
      setEmailVerified(!!user?.emailVerified)
      setVerificationCode(user?.verificationCode || '')
      setVerificationCodeExpires(user?.verificationCodeExpires || '')
    } else {
      setName('')
      setEmail('')
      setStatus('')
      setRole('')
      setPasswordHash('')
      setPhone('')
      setAvatarUrl('')
      setRoleId('')
      setAddresses('')
      setEmailVerified(false)
      setVerificationCode('')
      setVerificationCodeExpires('')
    }
  }, [mode, user, show])

  const handleSave = async () => {
    const payload = {
      name,
      email,
      status: status ? status.toLowerCase() : '',
      role,
      passwordHash,
      phone,
      avatarUrl,
      roleId,
      addresses: (() => {
        if (!addresses) return []
        try {
          return JSON.parse(addresses)
        } catch {
          return addresses
        }
      })(),
      emailVerified,
      verificationCode,
      verificationCodeExpires,
    }

    const url = 'http://localhost:8080/user'
    setSaving(true)
    try {
      if (mode === 'Add') {
        await axios.post(url, payload)
      } else if (mode === 'Edit') {
        if (!user?._id) {
          throw new Error('Missing user id for update')
        }
        await axios.put(`${url}/${user._id}`, payload)
      }
      onHide()
    } catch (error) {
      console.error('User save error:', error)
      alert(error.response?.data?.ERROR || error.response?.data?.error || error.message || 'Save failed')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Modal show={show} onHide={onHide} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>{mode === 'Add' ? 'Add user' : mode === 'Edit' ? 'Edit user' : 'View user'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="userForm.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              autoFocus={mode === "Add" ? true : false}
              disabled={mode === "View" ? true : false}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userForm.Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              disabled={mode === "View" ? true : false}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Row>
            <Col xs={9} md={6}>
              <Form.Group className="mb-3" controlId="userForm.Role">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  value={role}
                  disabled={mode === "View" ? true : false}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option>USER</option>
                  <option>ADMIN</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={9} md={6}
            >
              <Form.Group className="mb-3" controlId="userForm.Status">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={status}
                  disabled={mode === "View" ? true : false}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>ACTIVE</option>
                  <option>INACTIVE</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

            <Form.Group className="mb-3" controlId="userForm.Password">
              <Form.Label>Password hash</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password hash"
                disabled={mode === "View" ? true : false}
                value={passwordHash}
                onChange={(e) => setPasswordHash(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userForm.Phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone number"
                disabled={mode === "View" ? true : false}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userForm.Avatar">
              <Form.Label>Avatar URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Avatar URL"
                disabled={mode === "View" ? true : false}
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userForm.Addresses">
              <Form.Label>Addresses (JSON)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder='[{"street":"..."}]'
                disabled={mode === "View" ? true : false}
                value={addresses}
                onChange={(e) => setAddresses(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userForm.EmailVerified">
              <Form.Check
                type="checkbox"
                label="Email verified"
                disabled={mode === "View" ? true : false}
                checked={emailVerified}
                onChange={(e) => setEmailVerified(e.target.checked)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userForm.VerificationCode">
              <Form.Label>Verification code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Verification code"
                disabled={mode === "View" ? true : false}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userForm.VerificationCodeExpires">
              <Form.Label>Verification code expires</Form.Label>
              <Form.Control
                type="text"
                placeholder="ISO datetime or timestamp"
                disabled={mode === "View" ? true : false}
                value={verificationCodeExpires}
                onChange={(e) => setVerificationCodeExpires(e.target.value)}
              />
            </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        {mode === 'View' ? null :
          <Button variant="primary" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        }

      </Modal.Footer>
    </Modal>
  );
}

export default FormUser
