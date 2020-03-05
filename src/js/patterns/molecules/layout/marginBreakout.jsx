import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const MarginBreakout = ({ children, viewportWidth, onChange }) => {
    const [distance, setDistance] = useState(0)
    const pageRef = useRef(null)

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
                className='boost-product-slider mt-8'
                style={{
                    margin: `0 ${distance * -1}px`,
                    transition: 'margin 0.3s ease',
                }}
                >
                {children}
            </div>
        </>
    )
}

MarginBreakout.propTypes = {
    children: PropTypes.any.isRequired,
    viewportWidth: PropTypes.number.isRequired,
    onChange: PropTypes.func,
}

MarginBreakout.defaultProps = {
    onChange: () => {},
}
export default connect((globalState, props) => {
    return {
        ...props,
        viewportWidth: globalState.renderContext.viewportDimension.width,
    }
})(MarginBreakout)
