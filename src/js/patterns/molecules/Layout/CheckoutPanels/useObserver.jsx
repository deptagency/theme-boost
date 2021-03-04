import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import ResizeObserver from 'resize-observer-polyfill'

const useObserver = ({ callback, element }) => {
    const observer = useRef(null)

    useEffect(() => {
        const ResizeObserverOrPolyfill = ResizeObserver
        observer.current = new ResizeObserverOrPolyfill(callback)
        observe()
    }, [observe]) // eslint-disable-line react-hooks/exhaustive-deps

    const observe = () => {
        if (element && element.current && observer.current) {
            observer.current.observe(element.current)
        }
    }
}

useObserver.propTypes = {
    callback: PropTypes.func,
    element: PropTypes.object,
}

export default useObserver
