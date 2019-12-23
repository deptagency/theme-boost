import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class FormInput extends Component {
    render() {
        const props = this.props
        return (
            <input {...props} />
        )
    }
}

FormInput.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
}

FormInput.defaultProps = {
    id: undefined,
    type: 'text',
    name: 'textfield',
    className: '',
    checked: undefined,
    onChange: () => {}
}

export default ComponentInjector.return('FormInput', FormInput)
