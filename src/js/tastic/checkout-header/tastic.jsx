import React from 'react'
import PropTypes from 'prop-types'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import CheckoutHeader from '../../patterns/molecules/CheckoutHeader'

const CheckoutHeaderTastic = ({ data }) => {
    return <CheckoutHeader logo={data.logo} />
}
CheckoutHeaderTastic.propTypes = {
    data: PropTypes.shape({
        logo: PropTypes.shape({
            media: PropTypes.object,
        }),
    }),
}

export default tastify()(CheckoutHeaderTastic)
