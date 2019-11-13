import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import Swipe from 'react-easy-swipe'
import useWindowSize from '@rehooks/window-size'
import { isNull } from 'lodash'

const MobileSwipe = ({ sliderId, children, slideOffset }) => {
    let [scrollLeft, setScrollLeft] = useState(0)
    let [swiperContent, setSwiperContent] = useState(undefined)
    let swiper = useRef('swiper')
    let windowSize = useWindowSize()

    let [isMoving, setIsMoving] = useState(false)
    let [shouldSnapLeftBack, setShouldSnapLeftBack] = useState(false)
    let [shouldSnapRightBack, setShouldSnapRightBack] = useState(false)

    useEffect(() => {
        setSwiperContent({
            current: document.querySelector(`.${getSliderId()}`),
        })

        setScrollLeft(0)
    }, [getSliderId, windowSize])

    const onSwipeMove = (position) => {
        if (!isMoving && position.x > 0) {
            setIsMoving(true)
            handleLeftMove()
        }

        if (!isMoving && position.x < 0) {
            setIsMoving(true)
            handleRightMove()
        }
    }

    const onSwipeEnd = () => {
        setIsMoving(false)

        if (shouldSnapLeftBack) {
            setTimeout(function () {
                setScrollLeft(0)
                setShouldSnapLeftBack(false)
            }, 500)
        }

        if (shouldSnapRightBack) {
            setTimeout(function () {
                setScrollLeft(getContainerDiff())
                setShouldSnapRightBack(false)
            }, 500)
        }
    }

    const getSliderId = useCallback(() => { // eslint-disable-line react-hooks/exhaustive-deps
        return `catwalk-mobile-swipe-${sliderId}`
    })

    const shouldMoveRight = () => {
        return !!(scrollLeft <= getContainerDiff() + 150)
    }

    const shouldMoveLeft = () => {
        return !!(scrollLeft > -100)
    }

    const handleRightMove = () => {
        let newRight = scrollLeft + slideOffset
        const containerDiff = getContainerDiff() + 150

        const almostEnd = newRight > containerDiff

        if (shouldMoveRight()) {
            const position = almostEnd ? containerDiff : newRight
            setShouldSnapRightBack(almostEnd)
            setScrollLeft(position)
        }
    }

    const handleLeftMove = () => {
        if (shouldMoveLeft()) {
            const newLeft = scrollLeft - slideOffset
            const position = shouldSnapLeftBack ? -100 : newLeft

            setScrollLeft(position)
            setShouldSnapLeftBack(position < slideOffset)
        }
    }

    const getContainerDiff = () => {
        if (isNull(swiperContent.current) || isNull(swiper.current)) { return 0 }
        return swiperContent.current.clientWidth - swiper.current.clientWidth
    }

    return (
        <div className='catwalk-mobile-swipe' ref={swiper}>
            <Swipe
                className={getSliderId()}
                allowMouseEvents
                onSwipeMove={onSwipeMove}
                onSwipeEnd={onSwipeEnd}
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

MobileSwipe.defaultProps = {
    slideOffset: 250,
}

MobileSwipe.propTypes = {
    sliderId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    slideOffset: PropTypes.number,
}

export default MobileSwipe
