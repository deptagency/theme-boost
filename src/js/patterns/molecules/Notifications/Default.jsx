import React from 'react'
import PropTypes from 'prop-types'
import AlertSuccess from 'Atoms/alert/Success'
import AlertError from 'Atoms/alert/Error'

const DefaultNotifications = ({ notifications }) => {
    return (
        <div className='absolute bottom-0 left-0 right-0 z-50'>
            {Object.values(notifications).map((notification) => {
                if (notification.type === 'success') {
                    return <AlertSuccess key={notification.notificationId} message={notification.message} />
                }

                if (notification.type === 'error') {
                    return <AlertError key={notification.notificationId} message={notification.message} />
                }

                return null
            })}
        </div>
    )
}

DefaultNotifications.propTypes = {
    notifications: PropTypes.object.isRequired,
}

export default DefaultNotifications
