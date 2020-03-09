import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { smallScreen } from './responsive.module.scss'

const SmallScreen = ({ children }) => {
    return (
        <div className={classnames(smallScreen, 'select-none')}>
            {children}
        </div>
    )
}

SmallScreen.propTypes = {
    children: PropTypes.node.isRequired,
}

export default SmallScreen
