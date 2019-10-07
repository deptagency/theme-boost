import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from '../../../../app/injector'

class AtomsFormLabel extends Component {
    render () {
        const { className, value } = this.props

        return (<div className={className}>
          <label for=''>{value}</label>
        </div>)
    }
}

AtomsFormLabel.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}

AtomsFormLabel.defaultProps = {
    value: 'Label',
    className: ''
}

export default ComponentInjector.return('AtomsFormLabel', AtomsFormLabel)
