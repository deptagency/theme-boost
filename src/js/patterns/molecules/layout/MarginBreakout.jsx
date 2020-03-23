import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const MarginBreakout = ({
    children,
    onChange = () => {},
    variant = '',
    transition = false,
}) => {
    const [distance, setDistance] = useState(0)
    const pageRef = useRef(null)

    const viewportWidth = useSelector((state) => {
        return state.renderContext.viewportDimension.width
    })

    useEffect(() => {
        if (pageRef.current) {
            const newDistance = (viewportWidth - pageRef.current.offsetWidth) / 2
            setDistance(newDistance)
            onChange(newDistance)
        }
    }, [onChange, viewportWidth])

    return (
        <>
            <div ref={pageRef} />
            <div
                className={variant}
                style={{
                    margin: `0 ${distance * -1}px`,
                    transition: transition ? 'margin 0.3s ease' : 'none',
                }}
                >
                {children}
            </div>
        </>
    )
}

MarginBreakout.propTypes = {
    children: PropTypes.any,
    onChange: PropTypes.func,
    variant: PropTypes.string,
    transition: PropTypes.bool,
}

export default MarginBreakout
