import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Textarea extends Component {
    render () {
        return (<textarea name={this.props.name} id={this.props.id} />)
    }
}

Textarea.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
}

Textarea.defaultProps = {
    id: undefined,
    name: undefined,
}

export default ComponentInjector.return('Textarea', Textarea)
