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
                    <div className='w-0 h-0 border-l-4 border-r-4 border-b-4 border-x-transparent border-bottom-solid border-bottom-red-500 mt-1 ml-10' />
                    <Message
                        className='text-sm text-white bg-red-500 p-2 leading-tight rounded w-auto inline-block'
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
