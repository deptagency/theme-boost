import React, { useEffect } from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'

import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'

import AlertSuccess from '../../atoms/alert/Success'
import AlertError from '../../atoms/alert/Error'

import 'react-toastify/dist/ReactToastify.css'
import './default-notification-style.scss'

interface Props {
    message: string
    type: 'success' | 'info' | 'warning' | 'error'
}

function Notification({ message, type }: Props) {
    const Alert = type === 'error' ? AlertError : AlertSuccess

    useEffect(() => {
        toast(<Alert message={message} />, {
            className: 'notification-default',
        })
    }, [])

    return (
        <ToastContainer
            position={toast.POSITION.BOTTOM_CENTER}
            autoClose={3000}
            closeButton={false}
            hideProgressBar
            newestOnTop={false}
            rtl={false}
            transition={Slide}
            pauseOnFocusLoss
            pauseOnHover
            draggable
        />
    )
}

export default ComponentInjector.return('AtomsNotification', Notification)
