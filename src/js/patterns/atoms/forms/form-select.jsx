import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class FormSelect extends Component {
    render () {
        const { options } = this.props

        return (
            <div>
                <select name='select' id='inp-select'>
                    {options.map((o) => {
                        return <option value={o}>{o}</option>
                    })}
                </select>
            </div>
        )
    }
}

FormSelect.propTypes = {
    options: PropTypes.array.isRequired,
}

FormSelect.defaultProps = {
    options: ['value', 'value', 'value'],
}

export default ComponentInjector.return('FormSelect', FormSelect)
