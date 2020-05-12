import React from 'react'
import PropTypes from 'prop-types'

import { ErrorMessage as Message } from 'react-hook-form'

const ErrorMessage = ({ errors, name, as = 'div' }) => {
    return (
        <>
            {errors[name] &&
                <Message
                    className='mt-1 text-sm text-red-600 leading-tight'
                    errors={errors}
                    name={name}
                    as={as}
                />
            }
        </>
    )
}

ErrorMessage.propTypes = {
    errors: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    as: PropTypes.string,
}

export default ErrorMessage
