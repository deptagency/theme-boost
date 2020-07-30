import { useSelector } from 'react-redux'
import BREAKPOINTS from '../../../../config/breakpoints'

const usePhotoScale = () => {
    const scale = useSelector((state) => {
        const width = state.renderContext.viewportDimension ? state.renderContext.viewportDimension.width : window.innerWidth

        if (width < BREAKPOINTS.xsm) { return 1.3 } // really small screen
        if (width >= BREAKPOINTS.xsm && width < BREAKPOINTS.sm) { return 1.2 } // xsm screen
        if (width >= BREAKPOINTS.sm && width < BREAKPOINTS.md) { return 1.3 } // sm screen
        if (width >= BREAKPOINTS.md && width < BREAKPOINTS.lg) { return 1.3 } // md screen
        if (width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl) { return 1.3 } // lg screen
        if (width >= BREAKPOINTS.xl) { return 1.3 } // xl screen
    })

    return { scale }
}

export default usePhotoScale
