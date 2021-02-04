import React from 'react'
import { connect } from 'react-redux'

import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import TextPanel from '../../../../patterns/molecules/Panels/TextPanel'
//import TextPanel from 'src/js/patterns/molecules/Panels/TextPanel'

function DescriptionPanel({ product, data }) {
    if (!product) return null

    return <TextPanel title={data?.title} body={product?.description} />
}
export default tastify({ translate: true })(connect(productConnector)(DescriptionPanel))
