import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Label extends Component {
    render () {
        const { className, label } = this.props

        return (
            <div className={className}>
                <label htmlFor={this.props.htmlFor}>{label}</label>
            </div>
        )
    }
}

Label.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
}

Label.defaultProps = {
    label: 'Label',
    className: '',
    htmlFor: '',
}

export default ComponentInjector.return('Label', Label)
