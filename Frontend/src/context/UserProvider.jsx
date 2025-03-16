import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true) // Token simulado
  const navigate = useNavigate()

  const logout = () => {
    setToken(false) // Cambia el estado del token a false
    navigate('/login') // Redirige al login
  }

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
