import React from 'react'

import Login from './Forms/Login'
import Register from './Forms/Register'

export default {
    title: 'Account(markup)',
}

export const login = () => {
    return <Login />
}

export const signup = () => {
    return <Register />
}
