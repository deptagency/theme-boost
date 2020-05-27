import React from 'react'

import Login from 'Molecules/Account/Forms/Login'
import Register from 'Molecules/Account/Forms/Register'

export default {
    title: 'Account(markup)',
}

export const login = () => {
    return <Login />
}

export const signup = () => {
    return (
        <Register />
    )
}
