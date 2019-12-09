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
    children: PropTypes.object.isRequired,
}

export default ButtonBoxesDesktop
