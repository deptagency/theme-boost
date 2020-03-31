import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const Price = ({ value, currency: variantCurrency }) => {
    const { locale, currency } = useSelector((state) => {
        return {
            locale: state.app.context.locale.replace('_', '-').split('@')[0],
            currency: variantCurrency || state.app.context.currency,
        }
    })

    return (
        <span className='text-lg text-gray-600 py-1'>
            {(value / 100).toLocaleString(locale, { style: 'currency', currency })}
        </span>
    )
}

Price.propTypes = {
    value: PropTypes.number.isRequired,
    currency: PropTypes.string,
}

export default Price
