import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import UserForm from './form-user.component'
import axios from 'axios'
import FormUser from './form-user.component'
import RowUser from './row-user.component'

const userExample = {
name:"abc",
email:"abc3@gmail.com",
phone:"01234567894",
img_url: "abcqwertyuiop",
hash_pass:"iphone123",
role: "ADMIN",
token: "6a1214ca580d169e2a39ab11", //fast check need create token
status: "ACTIVE"
}

const ManagerUser = ({panelClass}) => {
    const [showUserForm, setShowUserForm] = useState(false)
    const [mode, setMode] = useState('')
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    // const [selectedUser, setSelectedUser] = useState(null)

    const turnOn = (mode) =>  {
        setShowUserForm(true)
        setMode(mode)
      }
      
      const turnOff = () => {
        setShowUserForm(false)
        console.log("---------MODE:",mode)
        if(mode === 'View' || mode === 'Edit'){
          setUser({})
        }
      
    }

    useEffect(() => {
      axios.get('http://localhost:8080/user')
      .then(res => {
        const raw = res.data?.data || []
        
        const mapUser = (u) => ({
          _id: u._id || null,
          name: u.name || '',
          email: u.email || '',
          passwordHash: u.passwordHash || u.hash_pass || u.password || '',
          phone: u.phone || '',
          avatarUrl: u.avatarUrl || u.img_url || null,
          roleId: u.role_id._id || u.role || null,
          role: (typeof (u.role_id) === 'object' && u.role_id !== null) ? (u.role_id.name || u.role_id.roleName) : (u.role || u.role_id || null),
          status: (u.status || '').toLowerCase(),
          addresses: u.addresses || [],
          emailVerified: !!u.emailVerified,
          verificationCode: u.verificationCode || null,
          verificationCodeExpires: u.verificationCodeExpires || null,
        })

        const formatted = raw.map(mapUser)
        setUsers(formatted)
      })
      .catch(error => {
        console.log(error)
      })
    },[])//when need render to change data?

    
    return (

        <section id="panel-users" className={panelClass('panel-users')}>
          <div className="page-intro">
            <h1>Quản lý User</h1>
            <p className="use-case-list">Add user · Get all users · Get user by ID · Update user · Change user status · Delete user</p>
          </div>

          <div className="panel-toolbar">
            <input type="search" className="form-input" style={{ maxWidth: '240px' }} placeholder="Tìm user..." />
            <button type="button" className="btn btn-primary" onClick={() => turnOn('Add')}>+ Add user</button>
          </div>

          {/* show user form */}
          <FormUser show={showUserForm} onHide={turnOff} mode={mode} user={user}/>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>

                {/*show user row */}
                {users.map((user, index) => (
                  <RowUser user={user} index={index} turnOn={turnOn} setUser={setUser} key={user._id || index || user.email}/>
                ))}

                </tbody>
            </table>
          </div>
          </section>
     
    )
}

export default ManagerUser
