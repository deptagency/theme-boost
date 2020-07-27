import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage as Message } from 'react-hook-form'

import './style.scss'

const ErrorMessage = ({ errors, name, as = 'div' }) => {
    const slideDown = 'slideDown 0.4s'

    return (
        <div style={{ animation: errors[name] ? slideDown : 'none' }}>
            {errors[name] &&
                <div style={{ animation: slideDown }}>
                    <div className='arrow-up-system-error' />
                    <Message
                        className='error-message-text-system-error'
                        errors={errors}
                        name={name}
                        as={as}
                    />
                </div>
            }
        </div>
    )
}

ErrorMessage.propTypes = {
    errors: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    as: PropTypes.string,
}

export default ErrorMessage
