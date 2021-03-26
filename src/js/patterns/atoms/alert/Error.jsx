import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as IconCheckMarkCircle } from '../../../../icons/tailwind-icons/icon-exclamation.svg'

const Error = ({ message }) => {
    return (
        <div className='flex items-center bg-system-error text-white text-sm px-4 py-3'>
            <IconCheckMarkCircle className='w-5 h-5 mr-2 inline-block text-white fill-current ' />
            <p>{message}</p>
        </div>
    )
}

Error.propTypes = {
    message: PropTypes.any.isRequired,
}

export default Error
