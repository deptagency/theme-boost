import React from 'react'
import PropTypes from 'prop-types'
import TinySlider from 'tiny-slider-react'

const sliderSettings = {
    loop: false,
    lazyload: true,
    lazyloadSelector: '.tns-lazy',
    mouseDrag: true,
    controls: false,
    items: 1.5,
    center: true,
    nav: false,
    responsive: {
        420: {
            items: 1.8,
        },
        660: {
            items: 2.4,
        },
        935: {
            items: 3.9,
        },
        1200: {
            items: 4.8,
        },
        1400: {
            items: 5.8,
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
