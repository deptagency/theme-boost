import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Fieldset extends Component {
    render () {
        return (
            <fieldset className={this.props.className}>
                <legend>{this.props.legend}</legend>
                <div className='o-form-area o-distance-m'>
                    {this.props.children}
                </div>
            </fieldset>
        )
    }
}

Fieldset.propTypes = {
    legend: PropTypes.string,
    className: PropTypes.string,
}

Fieldset.defaultProps = {
    legend: undefined,
    className: undefined,
}

export default ComponentInjector.return('Fieldset', Fieldset)
