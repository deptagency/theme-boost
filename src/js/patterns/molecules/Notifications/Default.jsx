import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AlertSuccess from 'Atoms/alert/Success'
import AlertError from 'Atoms/alert/Error'

import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './default-notification-style.scss'

const DefaultNotifications = ({ notifications }) => {
    const notify = (lastNotification) => {
        return toast(
            <>
                {lastNotification.type === 'success' && <AlertSuccess key={lastNotification.notificationId} message={lastNotification.message} />}
                {lastNotification.type === 'error' && <AlertError key={lastNotification.notificationId} message={lastNotification.message} />}
            </>
            , {
                className: 'notification-default',
                toastId: lastNotification.notificationId,
            })
    }

    useEffect(() => {
        const notificationList = Object.values(notifications)

        // Always show last notification, because the previous ones are already shown
        // notificationList get's empty only after page reload
        notificationList.length > 0 && notify(notificationList[notificationList.length - 1])
    }, [notifications])

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

DefaultNotifications.propTypes = {
    notifications: PropTypes.object.isRequired,
}

export default DefaultNotifications
