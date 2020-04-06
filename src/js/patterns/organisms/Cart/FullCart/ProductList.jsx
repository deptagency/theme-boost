import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Product from './Product'

const ProductList = ({ items }) => {
    return (
        <section>
            {items.map((item, index) => {
                return (
                    <div className='mt-8' key={index}>
                        <Product
                            itemId={item.lineItemId}
                            name={item.name}
                            designer={item.variant.attributes.designer.label}
                            image={item.variant.images[0]}
                            count={item.count}
                            price={item.price}
                            color={item.variant.attributes.color.label}
                            size={item.variant.attributes.size}
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

ProductList.defaultProps = {}

export default ComponentInjector.return('ProductList', ProductList)
