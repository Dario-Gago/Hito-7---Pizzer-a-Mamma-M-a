import React, { useContext } from 'react'
import './Profile.css'
import { UserContext } from '../../context/UserProvider'
const Profile = () => {
  const { logout } = useContext(UserContext)

  return (
    <div className='container mt-4'>
      <div className='card p-4 text-center'>
        <h4 className='mb-3'>Usuario</h4>
        <p className='mb-3'>correo@example.com</p>
        <button onClick={logout} className='btn btn-danger'>
          Cerrar sesión
        </button>
      </div>
    </div>

  )
}

export default Profile
