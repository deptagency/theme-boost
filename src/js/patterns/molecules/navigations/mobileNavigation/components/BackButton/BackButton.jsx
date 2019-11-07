import React from 'react'
import PropTypes from 'prop-types'

import backArrow from '../../../../../../../icons/arrow_back.svg'

/* Helper Component
   <BackButton onClick={} />
*/
export function BackButton ({ onClick }) {
    return (
        <button className='c-mobile-navigation__header-back-button' onClick={onClick}>
            <img src={backArrow} alt='Back' />
        </button>
    )
}
BackButton.propTypes = {
    onClick: PropTypes.func,
}
