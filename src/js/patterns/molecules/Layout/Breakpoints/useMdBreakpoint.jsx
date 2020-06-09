import { useSelector } from 'react-redux'
import BREAKPOINTS from '../../../../config/breakpoints'

const UseMdBreakpoint = () => {
    const { showPanel, showModal } = useSelector((state) => {
        const width = state.renderContext.viewportDimension ? state.renderContext.viewportDimension.width : window.innerWidth

        return {
            showPanel: width < BREAKPOINTS.md,
            showModal: width >= BREAKPOINTS.md,
        }
    })

    return { showPanel, showModal }
}

export default UseMdBreakpoint
