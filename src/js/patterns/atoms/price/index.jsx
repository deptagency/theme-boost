import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const Price = ({ value, className = '', variant = '', currency: variantCurrency }) => {
    const { locale, currency } = useSelector((state) => {
        return {
            locale: state.app.context.locale.replace('_', '-').split('@')[0],
            currency: variantCurrency || state.app.context.currency,
        }
    })

    return (
        <span className={`${variant} ${className}`}>
            {(value / 100).toLocaleString(locale, { style: 'currency', currency })}
        </span>
    )
}

Price.propTypes = {
    value: PropTypes.number.isRequired,
    variant: PropTypes.string,
    currency: PropTypes.string,
}

export default Price
