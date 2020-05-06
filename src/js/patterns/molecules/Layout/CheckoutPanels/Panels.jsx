import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { stepObject } from './stepObject'

import TinySlider from 'tiny-slider-react'

const Panels = forwardRef(({ steps, current, setCurrent, data }, ts) => {
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

            {steps.map(({ component: PanelComponent, name, checkoutDetails, setCheckoutDetails }, i) => {
                return (
                    <PanelComponent
                        key={i}
                        name={name}
                        data={data}
                        goToPanelIndex={panel => {
                            goToPanel(panel)
                        }}
                        goToNextPanel={() => {
                            goToPanel(current + 1)
                        }}
                        goToPreviousPanel={() => {
                            goToPanel(current - 1)
                        }}
                        checkoutDetails={checkoutDetails}
                        setCheckoutDetails={setCheckoutDetails}
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
    data: PropTypes.object.isRequired,
}

export default Panels
