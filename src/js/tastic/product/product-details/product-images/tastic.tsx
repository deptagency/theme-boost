import * as React from 'react'
import classnames from 'classnames'
import { useSelector } from 'react-redux'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'

import ProductImages from '../../../../patterns/organisms/Product/ProductImages'

import { Product, Variant } from '@frontastic/common/src/js/types/product'

interface RootState {
    variants: Variant[]
}

type Props = {
    data: { stream: Product }
}

function ProductImagesTastic(props: Props) {
    const { variant } = useSelector((state: RootState) => productConnector(state, props))

    if (!variant) return null

    return <ProductImages images={variant.images} />
}

export default tastify({ connect: {} })(ProductImagesTastic)
