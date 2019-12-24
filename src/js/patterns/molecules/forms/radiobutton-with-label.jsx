import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Label from 'js/patterns/atoms/forms/label'
import Radiobutton from 'js/patterns/atoms/forms/radiobutton'

class RadiobuttonWithLabel extends Component {
    render () {
        return (
            <div className='o-block-short'>
                <div className='o-block-short__short-item'>
                    <Radiobutton id={this.props.id} />
                </div>
                <div className='o-block-short__body'>
                    <Label className='c-form-label' htmlFor={this.props.id} label={this.props.label} />
                </div>
            </div>
        )
    }
}

RadiobuttonWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

RadiobuttonWithLabel.defaultProps = {
    id: undefined,
    label: 'Radiobutton-Label',
}

export default ComponentInjector.return('RadiobuttonWithLabel', RadiobuttonWithLabel)
