import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as IconCheckMarkCircle } from 'Icons/tailwind-icons/icon-check-circle.svg'

const Success = ({ message }) => {
    return (
        <div className='flex items-center bg-green-600 text-white text-sm px-4 py-3'>
            <IconCheckMarkCircle className='w-5 h-5 mr-2 inline-block text-white fill-current ' />
            <p>{message}</p>
        </div>
    )
}

Success.propTypes = {
    message: PropTypes.any.isRequired,
}

export default Success
