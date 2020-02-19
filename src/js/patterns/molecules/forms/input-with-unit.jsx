import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Input from '../../atoms/forms/input'

const InputWithUnit = ({ prefix, value, onChange, className, id, unit, connected }) => {
    return (
        <div className='c-form-unit'>
            {prefix && <div className='c-form-unit__type c-form-unit__type--prefix'>{unit}</div>}
            <Input
                type='number'
                value={value}
                onChange={onChange}
                className={className + (prefix ? ' c-form-unit__input--last' : (connected ? ' c-form-unit__input--connected' : ''))}
                id={id}
            />
            {!prefix && <div className='c-form-unit__type'>{unit}</div>}
        </div>
    )
}

InputWithUnit.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    unit: PropTypes.string,
    prefix: PropTypes.bool,
    connected: PropTypes.bool,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

InputWithUnit.defaultProps = {
    id: undefined,
    className: 'c-form-unit__input',
    unit: undefined,
    prefix: false,
    connected: false,
}

export default ComponentInjector.return('InputWithUnit', InputWithUnit)
