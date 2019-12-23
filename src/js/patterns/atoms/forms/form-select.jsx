import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class FormSelect extends Component {
    render () {
        const options = this.props.options
        
        return (
            <select name={this.props.name} multiple={this.props.multiple}>
                {options.map((option) => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        )
    }
}

FormSelect.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    multiple: PropTypes.bool
}

FormSelect.defaultProps = {
    name: undefined,
    options: undefined,
    multiple: undefined
}

export default ComponentInjector.return('FormSelect', FormSelect)
