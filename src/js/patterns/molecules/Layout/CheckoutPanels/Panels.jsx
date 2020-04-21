import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { stepObject } from './stepObject'

import TinySlider from 'tiny-slider-react'

const Panels = forwardRef(({ steps, current, setCurrent }, ts) => {
    return (
        <TinySlider
            ref={ts}
            settings={{
                loop: false,
                touch: false,
                controls: false,
            }}
            onIndexChanged={(ev) => {
                setCurrent(ev.index)
            }}
            >

            {steps.map((step, i) => {
                const PanelComponent = step.component
                return (<PanelComponent key={i} name={step.name} />)
            })}

        </TinySlider>
    )
})

Panels.propTypes = {
    steps: PropTypes.arrayOf(stepObject),
    current: PropTypes.oneOf([0, 1, 2]).isRequired,
    setCurrent: PropTypes.func.isRequired,
}

export default Panels
