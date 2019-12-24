import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Label from 'js/patterns/atoms/forms/label'
import Input from 'js/patterns/atoms/forms/input'

class InputWithLabel extends Component {
    render () {
        return(
            <div className={this.props.className}>
                <Label htmlFor={this.props.id} className='c-form-label' label={this.props.label} />
                <Input type={this.props.type} className='o-distance-xs' id={this.props.id} name={this.props.name} />
            </div>
        )
    }
}

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
}

InputWithLabel.defaultProps = {
    id: undefined,
    name: '',
    className: 'o-form-area__column-6-6 o-form-area__new-row',
    label: 'Input-Label',
    type: 'text',
}

export default ComponentInjector.return('InputWithLabel', InputWithLabel)
