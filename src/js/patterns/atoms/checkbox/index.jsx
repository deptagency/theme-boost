import React, { useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Checkbox = ({ value = false, className = '', label = '', onClick = () => {} }) => {
    const [ id ] = useState(() => _.uniqueId('checkbox-'))

    return (
        <>
            <input id={id} 
                type='checkbox' 
                className={`mr-2 ${className}`}
                defaultChecked={value} 
                onClick={onClick} 
            /> 
            <label htmlFor={id}>{label}</label>
        </>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string,
    value: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default Checkbox
