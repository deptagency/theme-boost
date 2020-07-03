import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Register from './Register'
import Login from './Login'
import ForgottenPassword from './ForgottenPassword'
import './style.scss'

import DefaultNotifications from 'Molecules/Notifications/Default'

const FORM_TYPE = {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
    FORGOTTEN_PASSWORD: 'FORGOTTEN_PASSWORD',
}

const AccountAccess = ({ handleRegister, handleLogin, handleRequestPasswordReset }) => {
    const [showLoader, setShowLoader] = useState(false)
    const [form, setFrom] = useState(FORM_TYPE.LOGIN)
    const showEasy = 'showEasy 0.4s'

    const notifications = useSelector((state) => {
        return state.user.notifications || {}
    })

    useEffect(() => {
        setShowLoader(false)
    }, [notifications])

    return (
        <>
            {(form === FORM_TYPE.LOGIN) && <div style={{ animation: showEasy }}>
                <Login
                    showLoader={showLoader}
                    showRegisterForm={() => { setFrom(FORM_TYPE.REGISTER) }}
                    showForgottenPasswordForm={() => { setFrom(FORM_TYPE.FORGOTTEN_PASSWORD) }}
                    handleLogin={(email, password) => {
                        setShowLoader(true)
                        handleLogin(email, password)
                    }}
                />
            </div>}
            {(form === FORM_TYPE.REGISTER) && <div style={{ animation: showEasy }}>
                <Register
                    showLoader={showLoader}
                    showLoginForm={() => { setFrom(FORM_TYPE.LOGIN) }}
                    handleRegister={(data) => {
                        setShowLoader(true)
                        handleRegister(data)
                    }}
                />
            </div>}
            {(form === FORM_TYPE.FORGOTTEN_PASSWORD) && <div style={{ animation: showEasy }}>
                <ForgottenPassword
                    showLoader={showLoader}
                    showLoginForm={() => { setFrom(FORM_TYPE.LOGIN) }}
                    handleRequestPasswordReset={(email) => {
                        setShowLoader(true)
                        handleRequestPasswordReset(email)
                    }}
                />
            </div>}

            <DefaultNotifications notifications={notifications} />
        </>
    )
}

AccountAccess.propTypes = {
    handleRegister: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleRequestPasswordReset: PropTypes.func.isRequired,
}

export default AccountAccess
