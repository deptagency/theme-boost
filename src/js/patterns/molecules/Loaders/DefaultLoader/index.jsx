import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const DefaultLoader = ({ variant }) => {
    return (
        <div>
            {/* <div className={`loading h-${variant}-loader md:h-${variant}-loader-md lg:h-${variant}-loader-lg`}> */}
            <div className='loading-catwalk' />
        </div>
    )
}

DefaultLoader.propTypes = {
    variant: PropTypes.oneOf(['cart', 'checkout']).isRequired,
}

export default DefaultLoader
