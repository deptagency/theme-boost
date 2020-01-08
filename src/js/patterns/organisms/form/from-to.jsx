import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import InputWithUnit from 'js/patterns/molecules/forms/input-with-unit'

class FromTo extends Component {
    render () {
        const { className } = this.props

        return (
            <div className={`c-form-element ${className}`}>
                <div className='c-form-from-to'>
                    <div className='c-form-from-to__item'>
                        <InputWithUnit unit='€' />
                    </div>
                    <div className='c-form-from-to__item c-form-from-to__item--connector' />
                    <div className='c-form-from-to__item'>
                        <InputWithUnit unit='€' />
                    </div>
                </div>
            </div>
        )
    }
}

FromTo.propTypes = {
    className: PropTypes.string,
}

FromTo.defaultProps = {
    className: '',
}

export default ComponentInjector.return('FromTo', FromTo)
