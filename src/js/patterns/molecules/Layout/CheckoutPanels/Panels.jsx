import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { stepObject } from './stepObject'

import TinySlider from 'tiny-slider-react'

const Panels = forwardRef(({ steps, current, setCurrent }, ts) => {
    const goToPanel = (panel) => {
        ts.current.slider.goTo(panel)
        setCurrent(panel)
    }

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
                return (
                    <PanelComponent
                        key={i}
                        name={step.name}
                        errorMessage={step.errorMessage}
                        goToNextPanel={() => {
                            goToPanel(current + 1)
                        }}
                        goToPreviousPanel={() => {
                            goToPanel(current - 1)
                        }}
                    />
                )
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
