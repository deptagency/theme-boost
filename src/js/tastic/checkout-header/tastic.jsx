import React from 'react'
import PropTypes from 'prop-types'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import CheckoutHeader from 'Molecules/CheckoutHeader'
import ReferencePropType from '@frontastic/catwalk/src/js/component/reference'

const CheckoutHeaderTastic = ( data ) => {
    console.log('data', data)
    return (
        <CheckoutHeader
            logo={data.logo}
        />
    )
}
CheckoutHeaderTastic.propTypes = {
    data: PropTypes.shape({
        logo: PropTypes.shape({
            media: PropTypes.object,
        }),
    }),
}

export default tastify()(CheckoutHeaderTastic)
