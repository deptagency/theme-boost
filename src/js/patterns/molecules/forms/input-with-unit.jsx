import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Input from 'js/patterns/atoms/forms/input'

class InputWithUnit extends Component {
    render () {
        const prefix = this.props.prefix

        return (
            <div className='c-form-unit'>
                {prefix && <div className='c-form-unit__type c-form-unit__type--prefix'>{this.props.unit}</div>}
                <Input type='text' className={this.props.className + (prefix ? ' c-form-unit__input--last' : (this.props.connected ? ' c-form-unit__input--connected' : ''))} id={this.props.id} />
                {!prefix && <div className='c-form-unit__type'>{this.props.unit}</div>}
            </div>
        )
    }
}

InputWithUnit.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    unit: PropTypes.string,
    prefix: PropTypes.bool,
    connected: PropTypes.bool,
}

InputWithUnit.defaultProps = {
    id: undefined,
    className: 'c-form-unit__input',
    unit: undefined,
    prefix: false,
    connected: false,
}

export default ComponentInjector.return('InputWithUnit', InputWithUnit)
