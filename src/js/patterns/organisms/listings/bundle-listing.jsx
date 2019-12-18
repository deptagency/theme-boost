import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import OrganismsBundle from '../bundles/bundle'
import { map } from 'lodash'

const OrganismsBundleListing = ({ cartItems }) => {
    return (
        <div>
            <section className='o-list-bare'>
                {map(cartItems, (item, index) => {
                    // TODO attributes.**.label - make it more robust
                    return (
                        <Fragment key={index}>
                            <OrganismsBundle
                                itemId={item.lineItemId}
                                name={item.name}
                                designer={item.variant.attributes.designer.label}
                                image={item.variant.images[0]}
                                count={item.count}
                                price={item.price}
                                color={item.variant.attributes.color.label}
                                size={item.variant.attributes.size}
                        />
                            {cartItems.length - 1 > index && <span style={{ marginTop: '12px' }} className='c-divider' />}
                        </Fragment>

                    )
                })}
            </section>
        </div>
    )
}

OrganismsBundleListing.propTypes = {
    cartItems: PropTypes.array.isRequired,
}

OrganismsBundleListing.defaultProps = {}

export default ComponentInjector.return('OrganismsBundleListing', OrganismsBundleListing)
