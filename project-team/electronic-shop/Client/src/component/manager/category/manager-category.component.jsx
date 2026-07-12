

import { useState, useEffect } from 'react'
import axios from 'axios'
import CategoryForm from './form-category.component'
import RowCategory from './row-category.component'

const ManagerCategory = ({ panelClass }) => {
  const [categories, setCategories] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [mode, setMode] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = 'http://localhost:8080/category'

  const loadCategories = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await axios.get(baseUrl)
      setCategories(response.data?.data || [])
    } catch (err) {
      setError(err.response?.data?.ERROR || err.response?.data?.error || err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCategories()
  }, [])

  const openForm = (formMode, category = null) => {
    setMode(formMode)
    setSelectedCategory(category)
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
    setMode('')
    setSelectedCategory(null)
  }

  return (
    <section id="panel-categories" className={panelClass('panel-categories')}>
      <div className="page-intro"><h1>Quản lý Category</h1><p className="use-case-list">Add · Get all · Update · Delete</p></div>
      <div className="panel-toolbar"><button type="button" className="btn btn-primary" onClick={() => openForm('Add')}>+ Add category</button></div>
      <CategoryForm show={showForm} onHide={closeForm} mode={mode} item={selectedCategory} baseUrl={baseUrl} onSave={loadCategories} />
      <div className="data-table-wrap">
        <table className="data-table">
          <thead><tr><th>ID</th><th>Name</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {loading && (
              <tr><td colSpan="4">Loading categories...</td></tr>
            )}
            {!loading && error && (
              <tr><td colSpan="4">{error}</td></tr>
            )}
            {!loading && !error && categories.length === 0 && (
              <tr><td colSpan="4">No categories found.</td></tr>
            )}
            {!loading && !error && categories.map((category, index) => (
              <RowCategory category={category} index={index} openForm={openForm} key={category._id || index} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ManagerCategory