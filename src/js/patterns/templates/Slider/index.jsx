import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import TinySlider from 'tiny-slider-react'

import ControlButton from './ControlButton'

const sliderSettings = {
    loop: false,
    lazyload: true,
    lazyloadSelector: '.tns-lazy',
    mouseDrag: true,
    items: 1,
    controls: false,
    center: true,
    nav: false,
    responsive: {
        300: {
            items: 1,
        },
        420: {
            items: 2,
            gutter: 16,
        },
        660: {
            items: 3,
            gutter: 16,
        },
        935: {
            items: 4,
            gutter: 16,
        },
    },
}
const Slider = ({ intl, children, options = {} }) => {
    let sliderRef = useRef()

    const handleSliderMove = (dir) => { return sliderRef.current.slider.goTo(dir) }
    return (
        <>
            <TinySlider settings={{ ...sliderSettings, ...options }} ref={sliderRef}>
                {children}
            </TinySlider>
            <ControlButton
                name={intl.formatMessage({ id: 'slider.previous' })}
                className='absolute left-0 middle'
                onClick={() => { return handleSliderMove('prev') }}
            />
            <ControlButton
                name={intl.formatMessage({ id: 'slider.next' })}
                className='absolute transform rotate-180 right-0'
                onClick={() => { return handleSliderMove('next') }}
            />
        </>
    )
}

Slider.propTypes = {
    intl: intlShape.isRequired,
    children: PropTypes.node.isRequired,
    options: PropTypes.object,
}

export default injectIntl(Slider)
