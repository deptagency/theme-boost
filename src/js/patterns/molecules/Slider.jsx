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
            items: 2.4,
        },
        660: {
            items: 3.4,
        },
        935: {
            items: 4.5,
        },
        1200: {
            items: 5.5,
        },
        1400: {
            items: 6.5,
        },
    },
}

const Slider = ({ children, options = {} }) => {
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
