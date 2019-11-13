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

const Slider = ({ children }) => {
    return (
        <TinySlider settings={sliderSettings}>
            {children}
        </TinySlider>
    )
}

Slider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Slider
