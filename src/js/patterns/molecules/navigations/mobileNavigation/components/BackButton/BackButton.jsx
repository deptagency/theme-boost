import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as BackLeft } from './../../../../../../../icons/arrow-left.svg'

/* Helper Component
   <BackButton onClick={} />
*/
export function BackButton ({ onClick }) {
    return (
        <button className='c-mobile-navigation__header-back-button' onClick={onClick}>
            <BackLeft />
        </button>
    )
}
BackButton.propTypes = {
    onClick: PropTypes.func,
}
