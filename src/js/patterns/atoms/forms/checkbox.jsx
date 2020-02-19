import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Input from './input'

class Checkbox extends Component {
    constructor (props) {
        super(props)

        this.onChange = this.onChange.bind(this)

        this.state = {
            checked: props.checked,
            disabled: props.disabled,
            required: props.required,
        }
    }

    onChange (checked) {
        this.setState({ checked })

        if (this.props.onChange) { this.props.onChange(checked) }
    }

    render () {
        return (
            <div className='c-form-checkbox'>
                <Input
                    type='checkbox'
                    name='checkbox'
                    className='c-form-checkbox__input'
                    id={this.props.id}
                    onChange={this.onChange}
                    checked={this.state.checked}
                    disabled={this.state.disabled}
                    required={this.state.required}
                />
                <span className='c-form-checkbox__backdrop' />
                <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                    <path
                        id='Check'
                        className='st0'
                        d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9
            c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121
            C203,40.1,200.1,25.5,189.3,18.4z'
                    />
                </svg>
            </div>
        )
    }
}

Checkbox.propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func,
}

Checkbox.defaultProps = {
    id: undefined,
    checked: undefined,
    disabled: undefined,
    required: undefined,
}

export default ComponentInjector.return('Checkbox', Checkbox)
