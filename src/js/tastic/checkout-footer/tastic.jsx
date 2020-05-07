import React from 'react'
import PropTypes from 'prop-types'
import CheckoutFooter from 'Molecules/CheckoutFooter'

const CheckoutFooterTastic = ({ data: { title, links } }) => {
    return (
        <CheckoutFooter
            title={title}
            links={links}
        />
    )
}
CheckoutFooterTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default CheckoutFooterTastic
