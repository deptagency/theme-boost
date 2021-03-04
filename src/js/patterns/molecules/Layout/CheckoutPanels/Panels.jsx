import React, { useRef, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { stepObject } from './stepObject'

import Entity from '@frontastic/catwalk/src/js/app/entity'
import { ScrollContext } from '@frontastic/catwalk/src/js/app/scrollContext'

import TinySlider from 'tiny-slider-react'
import './index.scss'

import useObserver from './useObserver'

const Panels = forwardRef(({ steps, current, setCurrent, app, data, cart, countries, policy, isLoading = false }, ts) => {
    const goToPanel = (panel) => {
        ts.current.slider.goTo(panel)
        setCurrent(panel)
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
                    const panelRef = useRef()

                    useObserver({
                        callback: () => {
                            if (ts.current) {
                                ts.current.slider.refresh()
                            }
                        },
                        element: panelRef,
                    })

                    return (
                        <div ref={panelRef} key={i}>
                            <ScrollContext.Consumer>
                                {context => (
                                    <PanelComponent
                                        name={name}
                                        app={app}
                                        cart={cart}
                                        data={data}
                                        countries={countries}
                                        policy={policy}
                                        goToPanelIndex={panel => {
                                            goToPanel(panel)
                                            context.forceScrollToTop()
                                        }}
                                        goToNextPanel={() => {
                                            goToPanel(current + 1)
                                            context.forceScrollToTop()
                                        }}
                                        goToPreviousPanel={() => {
                                            goToPanel(current - 1)
                                            context.forceScrollToTop()
                                        }}
                                        isLoading={isLoading}
                                    />
                                )}
                            </ScrollContext.Consumer>
                        </div>
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
    policy: PropTypes.string,
}

export default Panels
