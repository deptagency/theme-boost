import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Product from './Product'

const ProductList = ({ items }) => {
    return (
        <section>
            {items.map((item, index) => {
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
        </section>
    )
}

ProductList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ComponentInjector.return('ProductList', ProductList)
