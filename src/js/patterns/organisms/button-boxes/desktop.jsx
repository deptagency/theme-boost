import React from 'react'
import PropTypes from 'prop-types'
import { buttonBoxesDesktop } from './category-button-boxes.module.scss'

const ButtonBoxesDesktop = ({ children }) => {
    return (
        <div className={buttonBoxesDesktop}>
            {children}
        </div>
    )
}

ButtonBoxesDesktop.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.node]).isRequired,
}

export default ButtonBoxesDesktop
