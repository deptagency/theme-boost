import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Input extends Component {
    constructor (props) {
        super(props)

        this.onChange = this.onChange.bind(this)

        this.state = {
            checked: props.checked,
            diabled: props.disabled,
            required: props.required,
            hidden: props.hidden,
            value: props.value,
        }
    }

    onChange () {
        this.setState({ value: this.state.value })
    }

    render () {
        return (
            <input
                id={this.props.id}
                type={this.props.type}
                name={this.props.name}
                placeholder={this.props.placeholder}
                className={this.props.className}
                checked={this.props.checked}
                disabled={this.state.disabled}
                required={this.state.required}
                hidden={this.state.hidden}
                onChange={this.onChange}
                value={this.state.value}
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
            />
        )
    }
}

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    hidden: PropTypes.bool,
    value: PropTypes.any,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
}

Input.defaultProps = {
    id: undefined,
    type: 'text',
    name: 'textfield',
    placeholder: undefined,
    className: '',
    checked: undefined,
    disabled: undefined,
    required: undefined,
    hidden: undefined,
    value: undefined,
    min: undefined,
    max: undefined,
    step: undefined,
}

export default ComponentInjector.return('Input', Input)
