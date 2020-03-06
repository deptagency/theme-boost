import React from 'react'
import PropTypes from 'prop-types'

// TODO: Icon system
import { ReactComponent as CloseX } from './../../../../../../../icons/tailwind-icons/icon-close-white.svg'
/* Helper Component
   <CloseButton onClick={} />
*/
export function CloseButton ({ onClick }) {
    return (
        <button className='right-0 top-0 absolute text-5xl m-6' onClick={onClick}>
            <CloseX className='' />
        </button>
    )
}
CloseButton.propTypes = {
    onClick: PropTypes.func,
}
