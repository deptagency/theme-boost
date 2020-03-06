import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as BackLeft } from './../../../../../../../icons/tailwind-icons/icon-cheveron-left-white.svg'

/* Helper Component
   <BackButton onClick={} />
*/
export function BackButton ({ onClick }) {
    return (
        <div className='left-0 top-0 absolute text-6xl m-6 cursor-pointer' onClick={onClick}>
            <BackLeft />
        </div>
    )
}
BackButton.propTypes = {
    onClick: PropTypes.func,
}
