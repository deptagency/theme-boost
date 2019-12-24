import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Selectbox extends Component {
    render () {
        const options = this.props.options
        
        return (
            <select name={this.props.name} multiple={this.props.multiple}>
                {options.map((option) => {
                    if (typeof option === 'object') {
                        return <option key={option.key} value={option.key}>{option.value}</option>
                    } else {
                        return <option key={option} value={option}>{option}</option>
                    }
                })}
            </select>
        )
    }
}

Selectbox.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    multiple: PropTypes.bool
}

Selectbox.defaultProps = {
    name: undefined,
    options: undefined,
    multiple: undefined
}

export default ComponentInjector.return('Selectbox', Selectbox)
