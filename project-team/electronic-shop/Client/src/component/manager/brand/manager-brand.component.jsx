import { useState, useEffect } from 'react'
import axios from 'axios'
import BrandForm from './form-brand.component'
import RowBrand from './row-brand.component'

const ManagerBrand = ({ panelClass }) => {
  const [brands, setBrands] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [mode, setMode] = useState('')
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = 'http://localhost:8080/brand'

  const loadBrands = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await axios.get(baseUrl)
      setBrands(response.data?.data || [])
    } catch (err) {
      setError(err.response?.data?.ERROR || err.response?.data?.error || err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBrands()
  }, [])

  const openForm = (formMode, brand = null) => {
    setMode(formMode)
    setSelectedBrand(brand)
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
    setMode('')
    setSelectedBrand(null)
  }

  return (
    <section id="panel-brands" className={panelClass('panel-brands')}>
      <div className="page-intro"><h1>Quản lý Brand</h1><p className="use-case-list">Add · Get all · Update · Delete</p></div>
      <div className="panel-toolbar"><button type="button" className="btn btn-primary" onClick={() => openForm('Add')}>+ Add brand</button></div>
      <BrandForm show={showForm} onHide={closeForm} mode={mode} item={selectedBrand} baseUrl={baseUrl} onSave={loadBrands} />
      <div className="data-table-wrap">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Name</th><th>Logo</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {loading && (
              <tr><td colSpan="5">Loading brands...</td></tr>
            )}
            {!loading && error && (
              <tr><td colSpan="5">{error}</td></tr>
            )}
            {!loading && !error && brands.length === 0 && (
              <tr><td colSpan="5">No brands found.</td></tr>
            )}
            {!loading && !error && brands.map((brand, index) => (
              <RowBrand brand={brand} index={index} openForm={openForm} key={brand._id || index} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ManagerBrand