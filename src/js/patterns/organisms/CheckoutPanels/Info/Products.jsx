import React from 'react'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'

import Product from './Product'

const Products = ({ products }) => {
    return (
        <>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.yourOrder'} />
            </div>

            {products.map((item, index) => {
                return (
                    <div key={index} className={classnames({ 'mt-8': index > 0 })}>
                        <Product
                            itemId={item.lineItemId}
                            name={item.name}
                            designer={item.variant.attributes.designer?.label}
                            image={item.variant.images[0]}
                            count={item.count}
                            price={item.price}
                            color={item.variant.attributes.color?.label}
                            size={item.variant.attributes?.size}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default Products
