import React from 'react'
import PropTypes from 'prop-types'
import TinySlider from 'tiny-slider-react'

const sliderSettings = {
    loop: false,
    lazyload: true,
    lazyloadSelector: '.tns-lazy',
    mouseDrag: true,
    controls: false,
    items: 2,
    center: true,
    nav: false,
    responsive: {
        660: {
            items: 3,
        },
        935: {
            items: 4,
        },
        1200: {
            items: 5,
        },
    },
}

const Slider = ({ children, options }) => {
    return (
        <TinySlider settings={{ ...sliderSettings, ...options }}>
            {children}
        </TinySlider>
    )
}

Slider.defaultProps = {
    options: {},
}

Slider.propTypes = {
    children: PropTypes.node.isRequired,
    options: PropTypes.object,
}

export default Slider
