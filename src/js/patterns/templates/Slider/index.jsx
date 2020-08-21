import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import TinySlider from 'tiny-slider-react'
import ControlButton from './ControlButton'

const sliderSettings = {
    loop: false,
    lazyload: true,
    lazyloadSelector: '.tns-lazy',
    mouseDrag: true,
    items: 2,
    controls: false,
    center: true,
    nav: false,
    responsive: {
        420: {
            items: 2,
        },
        660: {
            items: 3,
        },
        935: {
            items: 4,
        },
    },
}
const Slider = ({ children, options }) => {
    let sliderRef = useRef()

    const handleSliderMove = (dir) => sliderRef.current.slider.goTo(dir)
    return (
        <>
            <div className='absolute flex w-full h-full z-10 items-center'>
                <ControlButton onClick={() => handleSliderMove('prev')} />
                <ControlButton
                    className='absolute transform rotate-180 right-0'
                    onClick={() => handleSliderMove('next')}
                />
            </div>
            <TinySlider settings={{ ...sliderSettings, ...options }} ref={sliderRef}>
                {children}
            </TinySlider>
        </>
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
