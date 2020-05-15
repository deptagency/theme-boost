import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { stepObject } from './stepObject'

import TinySlider from 'tiny-slider-react'
import './index.scss'

const Panels = forwardRef(({ steps, current, setCurrent, loading, data }, ts) => {
    const goToPanel = (panel) => {
        ts.current.slider.goTo(panel)
        setCurrent(panel)
    }

    const updateSliderHeight = () => {
        ts.current.slider.refresh()
    }

    return (
        <div className='checkout-panels-slider relative min-h-full'>
            <TinySlider
                ref={ts}
                settings={{
                    nav: false,
                    loop: false,
                    touch: false,
                    controls: false,
                    autoHeight: true,
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
                            loading={loading} // TODO Sanja - pass this ot every panel, and grab from every panel
                            data={data}
                            updateHeight={() => {
                                updateSliderHeight()
                            }}
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
        </div>
    )
})

Panels.propTypes = {
    steps: PropTypes.arrayOf(stepObject),
    current: PropTypes.oneOf([0, 1, 2]).isRequired,
    setCurrent: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
}

export default Panels
