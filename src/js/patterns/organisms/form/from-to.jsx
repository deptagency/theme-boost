import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import InputWithUnit from '../../molecules/forms/input-with-unit'
import { FormattedMessage } from 'react-intl'
import { invalidRange } from './form.module.scss'

const FromTo = ({ className, value, onChange }) => {
    const [currentValue, setCurrentValue] = useState(value)
    const [rangeIsValid, setRangeIsValid] = useState(value.min <= value.max)

    const handleChange = (v) => {
        const isValid = (v.min <= v.max)
        setRangeIsValid(isValid)
        setCurrentValue(v)

        if (isValid) {
            onChange(v)
        }
    }

    return (
        <div className={`c-form-element ${className}`}>
            <div className='c-form-from-to'>
                <div className='c-form-from-to__item'>
                    <InputWithUnit
                        value={currentValue ? currentValue.min : ''}
                        unit='€'
                        onChange={(v) => {
                            handleChange({ min: parseInt(v), max: currentValue.max })
                        }}
                    />
                </div>
                <div className='c-form-from-to__item c-form-from-to__item--connector' />
                <div className='c-form-from-to__item'>
                    <InputWithUnit
                        value={currentValue ? currentValue.max : ''}
                        unit='€'
                        onChange={(v) => {
                            handleChange({ min: currentValue.min, max: parseInt(v) })
                        }}
                    />
                </div>
            </div>

            {!rangeIsValid && <div className={invalidRange}>
                <FormattedMessage id={'filters.invalidPriceRange'} />
            </div>}
        </div>
    )
}

FromTo.propTypes = {
    className: PropTypes.string,
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
}

FromTo.defaultProps = {
    className: '',
}

export default ComponentInjector.return('FromTo', FromTo)
