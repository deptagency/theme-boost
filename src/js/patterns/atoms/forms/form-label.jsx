import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class AtomsFormLabel extends Component {
    render () {
        const { className, value } = this.props

        return (
            <div className={className}>
                <label htmlFor={this.props.htmlFor}>{value}</label>
            </div>
        )
    }
}

AtomsFormLabel.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
}

AtomsFormLabel.defaultProps = {
    value: 'Label',
    className: '',
    htmlFor: '',
}

export default ComponentInjector.return('AtomsFormLabel', AtomsFormLabel)
