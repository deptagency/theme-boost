import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Fieldset extends Component {
    render () {
        return (
            <fieldset>
                <legend>{this.props.legend}</legend>
                {this.props.children}
            </fieldset>
        )
    }
}

Fieldset.propTypes = {
    id: PropTypes.string,
    legend: PropTypes.string,
}

Fieldset.defaultProps = {
    id: undefined,
    legend: undefined,
}

export default ComponentInjector.return('Fieldset', Fieldset)
