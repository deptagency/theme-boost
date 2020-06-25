import { useSelector } from 'react-redux'
import BREAKPOINTS from '../../../../config/breakpoints'

const useSlidePanel = () => {
    const { usePanel } = useSelector((state) => {
        const width = state.renderContext.viewportDimension ? state.renderContext.viewportDimension.width : window.innerWidth

        return {
            usePanel: width < BREAKPOINTS.md,
        }
    })

    return { usePanel }
}

export default useSlidePanel
