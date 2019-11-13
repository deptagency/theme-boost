import React from 'react'
import PropTypes from 'prop-types'

// TODO: Icon system
import { ReactComponent as CloseX } from './../../../../../../../icons/close_x_mobile.svg'

/* Helper Component
   <CloseButton onClick={} />
*/
export function CloseButton({ onClick }) {
    return (
        <button className='c-mobile-navigation__header-close-button' onClick={onClick}>
            <CloseX />
        </button>
    )
}
CloseButton.propTypes = {
    onClick: PropTypes.func,
}
