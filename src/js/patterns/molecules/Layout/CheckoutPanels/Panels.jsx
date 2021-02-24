import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { stepObject } from './stepObject'

import Entity from '@frontastic/catwalk/src/js/app/entity'

import TinySlider from 'tiny-slider-react'
import './index.scss'

const Panels = forwardRef(({ steps, current, setCurrent, app, data, cart, countries, termsPolicy, privacyPolicy, cancelationPolicy, isLoading = false }, ts) => {
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

                {steps.map(({ component: PanelComponent, name }, i) => {
                    return (
                        <PanelComponent
                            key={i}
                            name={name}
                            app={app}
                            cart={cart}
                            data={data}
                            countries={countries}
                            termsPolicy={termsPolicy}
                            privacyPolicy={privacyPolicy}
                            cancelationPolicy={cancelationPolicy}
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
                            isLoading={isLoading}
                        />
                    )
                })}

            </TinySlider>
        </div>
    )
})

Panels.propTypes = {
    app: PropTypes.object.isRequired,
    steps: PropTypes.arrayOf(stepObject),
    current: PropTypes.oneOf([0, 1, 2]).isRequired,
    setCurrent: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
    cart: PropTypes.instanceOf(Entity),
    isLoading: PropTypes.bool,
    termsPolicy: PropTypes.object,
    privacyPolicy: PropTypes.object,
    cancelationPolicy: PropTypes.object,
}

export default Panels
