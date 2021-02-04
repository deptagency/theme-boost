import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import TextPanel from '../../../../patterns/molecules/Panels/TextPanel'

function DescriptionPanel ({ product, data }) {
    if (!product) {
        return null
    }

    return <TextPanel title={data?.title} body={product?.description} />
}
DescriptionPanel.propTypes = {
    product: PropTypes.object,
    data: PropTypes.object,
}
export default tastify({ translate: true })(connect(productConnector)(DescriptionPanel))
