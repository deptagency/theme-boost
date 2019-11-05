import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import Swipe from 'react-easy-swipe'
import useWindowSize from '@rehooks/window-size'
import { isNull } from 'lodash'

const Swiper = ({ sliderId, children, slideOffset }) => {
    let [scrollLeft, setScrollLeft] = useState(0)
    let [swiperContent, setSwiperContent] = useState(undefined)
    let swiper = useRef('swiper')
    let windowSize = useWindowSize()

    useEffect(() => {
        setSwiperContent({
            current: document.querySelector(`.${getSliderId()}`),
        })

        setScrollLeft(0)
    }, [getSliderId, windowSize])

    const getSliderId = useCallback(() => { // eslint-disable-line react-hooks/exhaustive-deps
        return `swiper-${sliderId}`
    })

    const shouldMoveRight = () => {
        return !!(scrollLeft <= getContainerDiff())
    }

    const shouldMoveLeft = () => {
        return !!(scrollLeft > 0)
    }

    const handleRightMove = () => {
        let newRight = scrollLeft + slideOffset
        const containerDiff = getContainerDiff()

        const almostEnd = newRight > containerDiff

        if (shouldMoveRight()) {
            const position = almostEnd ? containerDiff : newRight
            setScrollLeft(position)
        }
    }

    const handleLeftMove = () => {
        if (shouldMoveLeft()) {
            const newLeft = scrollLeft - slideOffset
            const position = newLeft < slideOffset ? 0 : newLeft

            setScrollLeft(position)
        }
    }

    const getContainerDiff = () => {
        if (isNull(swiperContent.current) || isNull(swiper.current)) { return 0 }
        return swiperContent.current.clientWidth - swiper.current.clientWidth
    }

    return (
        <div className='swiper' ref={swiper}>
            <Swipe
                className={getSliderId()}
                allowMouseEvents
                onSwipeLeft={handleRightMove}
                onSwipeRight={handleLeftMove}
                style={{
                    transform: `translateX(${-scrollLeft}px)`,
                    transition: 'transform ease-out 0.45s',
                }}
            >
                {children}
            </Swipe>
        </div>
    )
}

Swiper.defaultProps = {
    slideOffset: 250,
}

Swiper.propTypes = {
    sliderId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    slideOffset: PropTypes.number,
}

export default Swiper
