import React from 'react'
import PropTypes from 'prop-types'
import Slider from '../../templates/slider'

const ButtonBoxesMobile = ({ children }) => {
    return (
        <div>
            <Slider options={{ fixedWidth: 290 }}>
                {children}
            </Slider>
        </div>
    )
}

ButtonBoxesMobile.propTypes = {
    children: PropTypes.array.isRequired,
}

export default ButtonBoxesMobile
