import React from 'react'
import PropTypes from 'prop-types'

const ButtonBoxesDesktop = ({ children }) => {
    return (
        <div className='w-full grid gap-4 grid-cols-3'>
            {children}
        </div>
    )
}

ButtonBoxesDesktop.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.node]).isRequired,
}

export default ButtonBoxesDesktop
