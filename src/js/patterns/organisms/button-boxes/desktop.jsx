import React from 'react'
import PropTypes from 'prop-types'

const ButtonBoxesDesktop = ({ children }) => {
    return (
        <div className='o-grid o-grid--third'>
            {children}
        </div>
    )
}

ButtonBoxesDesktop.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.node]).isRequired,
}

export default ButtonBoxesDesktop
