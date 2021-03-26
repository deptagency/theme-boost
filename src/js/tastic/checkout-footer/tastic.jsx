import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import CheckoutFooter from '../../patterns/molecules/CheckoutFooter'

const CheckoutFooterTastic = ({ data: { title, links } }) => {
    return <CheckoutFooter title={title} links={links} />
}
CheckoutFooterTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default tastify({ translate: true })(CheckoutFooterTastic)
