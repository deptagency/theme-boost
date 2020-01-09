import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Bundle from '../bundles/bundle'
import { map } from 'lodash'

const BundleListing = ({ cartItems }) => {
    return (
        <div className='o-distance-l'>
            <section>
                {map(cartItems, (item, index) => {
                    // TODO attributes.**.label - make it more robust
                    return (
                        <Fragment key={index}>
                            <div className='o-distance-m'>
                                <Bundle
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
                            {cartItems.length - 1 > index && <span style={{ marginTop: '12px' }} className='c-divider' />}
                        </Fragment>

                    )
                })}
            </section>
        </div>
    )
}

BundleListing.propTypes = {
    cartItems: PropTypes.array.isRequired,
}

BundleListing.defaultProps = {}

export default ComponentInjector.return('BundleListing', BundleListing)
