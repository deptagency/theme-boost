import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from '../../../app/injector'

class AtomsFormSelect extends Component {
    render () {
        const { options } = this.props

        return (<div>
          <select name='select' id='inp-select'>
              {options.map((o) => {
                  return <option value={o}>{o}</option>
              })}
          </select>
        </div>)
    }
}

AtomsFormSelect.propTypes = {
    options: PropTypes.array.isRequired
}

AtomsFormSelect.defaultProps = {
    options: ['value', 'value', 'value']
}

export default ComponentInjector.return('AtomsFormSelect', AtomsFormSelect)
