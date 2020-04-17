import React, { Fragment, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Step from './Step'
import { stepObject } from './stepObject'

const Stepper = forwardRef(({ steps, current, setCurrent }, ts) => {
    const Divider = () => { return (<span className='border-2 h-0 my-2 z-0' />) }

    return (
        <>
            <div className='grid grid-rows-2 max-w-3/4 m-auto p-5'>
                <div className='grid grid-cols-1.25rem-1fr-1.25rem-1fr-1.25rem w-full m-auto px-4'>
                    {steps.map(({ name }, i) => {
                        return (
                            <Fragment key={i}>
                                <Step
                                    completed={i < current}
                                    current={i === current}
                                    onSelect={() => {
                                        ts.current.slider.goTo(i)
                                        setCurrent(i)
                                    }}
                                />
                                {i < steps.length - 1 && <Divider />}
                            </Fragment>
                        )
                    })}
                </div>
                <div className='flex justify-between'>
                    {steps.map(({ name }, i) => {
                        return (
                            <div key={i}>
                                <div className={classnames({
                                    'mt-2 text-xs': true,
                                    'text-gray-500': i !== current,
                                    'font-bold text-gray-800': i === current,
                                })}>
                                    {name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
})

Stepper.propTypes = {
    steps: PropTypes.arrayOf(stepObject),
    current: PropTypes.oneOf([0, 1, 2]).isRequired,
    setCurrent: PropTypes.func.isRequired,
}

export default Stepper
