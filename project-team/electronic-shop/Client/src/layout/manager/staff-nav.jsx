import {Link} from 'react-router-dom'
const panels = [
  ['panel-dashboard', 'Tổng quan'],
  ['panel-users', 'Users'],
  ['panel-categories', 'Categories'],
  ['panel-brands', 'Brands'],
  ['panel-products', 'Products'],
  ['panel-product-details', 'Product Details'],
]


const StaffNav = ({setActivePanel, activePanel}) => {
    return(
        <aside className="admin-sidebar">
        <Link to="/" className="logo">
          <span className="logo-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
          </span>
          Tech<em>Home</em>
        </Link>
        <p className="text-small text-muted mb-4">Role: <span className="role-tag">Admin</span></p>
        <nav className="admin-nav">
          {panels.map(([id, label]) => (
            <a
              href={`#${id}`}
              className={activePanel === id ? 'active' : ''}
              key={id}
              onClick={(event) => {
                event.preventDefault()
                setActivePanel(id)
              }}
            >
              {label}
            </a>
          ))}
          
        </nav>
        <Link to="/" className="text-small text-muted" style={{ display: 'block', marginTop: 'var(--space-6)' }}>← Về cửa hàng</Link>
        <Link to="/login" className="text-small" style={{ color: 'var(--color-danger)' }}>Sign out</Link>
      </aside>
    )
}

export default StaffNav