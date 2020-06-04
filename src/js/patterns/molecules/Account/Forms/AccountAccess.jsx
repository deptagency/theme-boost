import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Register from './Register'
import Login from './Login'
import ForgottenPassword from './ForgottenPassword'
import './style.scss'

const FORM_TYPE = {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
    FORGOTTEN_PASSWORD: 'FORGOTTEN_PASSWORD',
}

const AccountAccess = ({ handleRegister, handleLogin, handleRequestPasswordReset }) => {
    const [form, setFrom] = useState(FORM_TYPE.LOGIN)
    const showEasy = 'showEasy 0.4s'

    return (
        <>
            {(form === FORM_TYPE.LOGIN) && <div style={{ animation: showEasy }}>
                <Login
                    showRegisterForm={() => { setFrom(FORM_TYPE.REGISTER) }}
                    showForgottenPasswordForm={() => { setFrom(FORM_TYPE.FORGOTTEN_PASSWORD) }}
                    handleLogin={handleLogin}
                />
            </div>}
            {(form === FORM_TYPE.REGISTER) && <div style={{ animation: showEasy }}>
                <Register
                    showLoginForm={() => { setFrom(FORM_TYPE.LOGIN) }}
                    handleRegister={handleRegister}
                />
            </div>}
            {(form === FORM_TYPE.FORGOTTEN_PASSWORD) && <div style={{ animation: showEasy }}>
                <ForgottenPassword
                    handleRequestPasswordReset={handleRequestPasswordReset}
                    showLoginForm={() => { setFrom(FORM_TYPE.LOGIN) }}
                />
            </div>}
        </>
    )
}

AccountAccess.propTypes = {
    handleRegister: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleRequestPasswordReset: PropTypes.func.isRequired,
}

export default AccountAccess
