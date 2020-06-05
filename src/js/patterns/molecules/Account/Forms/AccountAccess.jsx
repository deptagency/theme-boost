import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Register from './Register'
import Login from './Login'
import './style.scss'

const FORM_TYPE = {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
}

const AccountAccess = ({ handleRegister, handleLogin }) => {
    const [form, setFrom] = useState(FORM_TYPE.LOGIN)
    const showEasy = 'showEasy 0.4s'

    return (
        <>
            {(form === FORM_TYPE.LOGIN) && <div style={{ animation: showEasy }}>
                <Login
                    showRegisterForm={() => { setFrom(FORM_TYPE.REGISTER) }}
                    handleLogin={handleLogin}
                />
            </div>}
            {(form === FORM_TYPE.REGISTER) && <div style={{ animation: showEasy }}>
                <Register
                    showLoginForm={() => { setFrom(FORM_TYPE.LOGIN) }}
                    handleRegister={handleRegister}
                />
            </div>}
        </>
    )
}

AccountAccess.propTypes = {
    handleRegister: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
}

export default AccountAccess
