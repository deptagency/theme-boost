import React, { Component, Fragment } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import OrganismsBundle from '../bundles/bundle'
import { map } from 'lodash'

const OrganismsBundleListing = ({ cartItems, currency }) => {
    return (
        <div>
            <section className='o-list-bare'>
                {map(cartItems, (item, index) => {
                    // TODO attributes.**.label - make it more robust
                    return (
                        <Fragment>
                            <div className='o-list-bare__item'>
                                <OrganismsBundle
                                    name={item.name}
                                    designer={item.variant.attributes.designer.label}
                                    image={item.variant.images[0]}
                                    count={item.count}
                                    price={item.price}
                                    color={item.variant.attributes.color.label}
                                    size={item.variant.attributes.size}
                                    currency={currency}
                                />
                            </div>
                            {cartItems.length - 1 > index && <span className='c-divider o-list-bare__item' />}
                        </Fragment>

                    )
                })}
            </section>
        </div>
    )
}

OrganismsBundleListing.propTypes = {}

OrganismsBundleListing.defaultProps = {}

export default ComponentInjector.return('OrganismsBundleListing', OrganismsBundleListing)
