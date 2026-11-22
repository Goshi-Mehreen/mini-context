import React, { useContext } from 'react'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/UserContext'
import Profile from './components/Profile'
import Login from './components/Login'

function Home() {
  const { user } = useContext(UserContext)

  return (
    <>
      
      {user ? <Profile /> : <Login />}
    </>
  )
}

function App() {
  return (
    <UserContextProvider>
      <Home />
    </UserContextProvider>
  )
}

export default App