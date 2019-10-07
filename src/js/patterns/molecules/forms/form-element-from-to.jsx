import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from '../../../app/injector'

class FormElementFromTo extends Component {
    render () {
        const { className } = this.props

        return (
          <div className={`c-form-element ${className}`}>
            <div className="c-form-from-to">
              <div className="c-form-from-to__item">
                <div className="c-form-unit">
                  <input type="text" className="c-form-unit__input" id="inp-unit" />
                  <div className="c-form-unit__type">€</div>
                </div>
              </div>
              <div className="c-form-from-to__item c-form-from-to__item--connector"></div>
              <div className="c-form-from-to__item">
                <div className="c-form-unit">
                  <input type="text" className="c-form-unit__input" id="inp-unit" />
                  <div className="c-form-unit__type">€</div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

FormElementFromTo.propTypes = {
    className: PropTypes.string
}

FormElementFromTo.defaultProps = {
    className: ''
}

export default ComponentInjector.return('FormElementFromTo', FormElementFromTo)
