import { useState } from 'react'
import { Link } from 'react-router-dom'
import './../../css/components.css'
import './../../css/design-system.css'
import './../../css/pages.css'
import  StaffNav  from '../../layout/manager/staff-nav'

import ManagerUser from './../../component/manager/user/manager-user.component'
import ManagerProduct from './../../component/manager/product/manager-product.component'
import ManagerBrand from '../../component/manager/brand/manager-brand.component'
import ManagerCategory from '../../component/manager/category/manager-category.component'
import ManagerProductVariant from '../../component/manager/product_variant/manager-product-variant.component'
const panels = [
  ['panel-dashboard', 'Tổng quan'],
  ['panel-users', 'Users'],
  ['panel-categories', 'Categories'],
  ['panel-brands', 'Brands'],
  ['panel-products', 'Products'],
  ['panel-product-variants', 'Product Variants'],
]

const AdminPage = () => {
  const [activePanel, setActivePanel] = useState('panel-dashboard')

  const panelClass = (id) => `panel${activePanel === id ? ' active' : ''}`

  return (
    <div className="admin-layout">

      
      <StaffNav setActivePanel={setActivePanel} activePanel={activePanel}/>

      <main className="admin-main">
        <section id="panel-dashboard" className={panelClass('panel-dashboard')}>
          <div className="page-intro">
            <h1>Admin Dashboard</h1>
            <p className="text-muted text-small">Quản lý theo use case WDP301 — chỉ giao diện demo</p>
          </div>
          <div className="stat-cards">
            <div className="stat-card"><div className="label">Users</div><div className="value">1,240</div></div>
            <div className="stat-card"><div className="label">Products</div><div className="value">387</div></div>
            <div className="stat-card"><div className="label">Categories</div><div className="value">12</div></div>
            <div className="stat-card"><div className="label">Brands</div><div className="value">28</div></div>
          </div>
          <div className="task-map card card-body">
            <h3>Phân quyền theo WDP301</h3>
            <ul>
              <li><strong>Guest:</strong> Sign in/out, xem category/brand/product</li>
              <li><strong>User:</strong> Payment, đổi MK, xem/sửa profile</li>
              <li><strong>Admin:</strong> CRUD user, category, brand, product, productDetail</li>
            </ul>
          </div>
        </section>

        
        <ManagerUser panelClass={panelClass}/>

     
        <ManagerCategory panelClass={panelClass} />

       
        <ManagerBrand panelClass={panelClass}/>

       
        <ManagerProduct panelClass={panelClass}/>

        
        <ManagerProductVariant panelClass={panelClass}/>

      </main>
    </div>
  )
}

        
export default AdminPage
