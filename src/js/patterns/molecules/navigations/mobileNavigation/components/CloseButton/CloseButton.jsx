import React from 'react'
import PropTypes from 'prop-types'

// TODO: Icon system
import { ReactComponent as CloseX } from './../../../../../../../icons/close-x-mobile.svg'

/* Helper Component
   <CloseButton onClick={} />
*/
export function CloseButton ({ onClick }) {
    return (
        <button className='o-head-up__item o-head-up__item--top-right' onClick={onClick}>
            <CloseX className='c-icon' />
        </button>
    )
}
CloseButton.propTypes = {
    onClick: PropTypes.func,
}
