import React from 'react'
import PropTypes from 'prop-types'
import { largeScreen } from './responsive.module.scss'

const LargeScreen = ({ children }) => {
    return (
        <div className={largeScreen}>
            {children}
        </div>
    )
}

LargeScreen.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LargeScreen
