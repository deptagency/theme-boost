import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Product from './Product'

const ProductList = ({ items }) => {
    return (
        <section className='mt-12'>
            {items.map((item, index) => {
                return (
                    <Fragment key={index}>
                        <div className='mt-8'>
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
                        {items.length - 1 > index && <span style={{ marginTop: '12px' }} className='block w-full h-px bg-gray-200' />}
                    </Fragment>
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
