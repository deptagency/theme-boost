import React from 'react'
import { connect } from 'react-redux'

import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import Header from '../../../../patterns/atoms/header'

function ProductTitle({ product }) {
    if (!product) return null

    return <Header title={product.name} />
}

export default tastify({ translate: true, connect: { wishlist: true } })(connect(productConnector)(ProductTitle))
