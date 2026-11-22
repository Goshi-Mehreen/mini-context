import React from 'react'
import {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
      const { user } = useContext(UserContext);

if (!user) {
  return <h2>Please Login</h2>;
}

return (
  <div>
    <h1>My Profile</h1>
    <p>Username: {user.username}</p>
    <p>Password: {user.password}</p>
  </div>
);

}

export default Profile
