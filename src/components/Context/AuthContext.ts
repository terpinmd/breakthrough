import React from 'react'

const AuthContext = React.createContext({
  token: '',
  updateToken: () => {},
  signOut: () => {},
})

export default AuthContext
