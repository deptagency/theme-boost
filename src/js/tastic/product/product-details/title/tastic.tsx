import React from 'react'
import { connect } from 'react-redux'

import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import Header from '../../../../patterns/atoms/header'

function ProductTitle({ product }) {
    return <Header className='mb-1' title={product.name} />
}

export default tastify({ translate: true, connect: { wishlist: true } })(connect(productConnector)(ProductTitle))
