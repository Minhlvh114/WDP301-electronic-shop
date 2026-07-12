



//should wrap this validate function to package/files
const getRoleName = (user) => {
    if (typeof user.roleId === 'object' && user.roleId !== null) {
        return user.roleId.name || user.roleId.roleName || user.roleId._id || 'N/A'
    }
    return  user.role || user.roleId || 'N/A'
}

const formatStatus = (status) => status ? status.charAt(0).toUpperCase() + status.slice(1) : 'N/A'


// const RowUser = (props) => { //props = {user, index, turnOn, setUser}
const RowUser = ({ user, index, turnOn, setUser }) => {

    
    return (
        <tr >
                <td>{user._id || index}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{getRoleName(user)}</td>
                <td>
                    <span className={`badge text-bg-${user.status === 'active' ? 'success' : 'danger'}`}>{formatStatus(user.status)}</span>
                </td>
            <td>
                <button className="btn btn-sm btn-secondary" onClick={() => { setUser(user); turnOn("View") }}>View</button>
                <button className="btn btn-sm btn-secondary" onClick={() => { setUser(user); turnOn("Edit") }}>Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default RowUser