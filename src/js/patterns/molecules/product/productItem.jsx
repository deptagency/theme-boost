import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import AtomsPrice from '../../atoms/prices/price'

class ProductItem extends Component {
    render () {
        let product = this.props.product

        const { name, variant } = product

        return (
            <div>
                <article className="o-product">
                    <Link itemProp='url' to={product._url || ''}>
                        <div className='o-head-up'>
                            <img
                                className='tns-lazy'
                                src={variant.images[0]}
                                data-src={variant.images[0]}
                                alt={name}
                                style={{ width: '320px', margin: '0 auto' }}
                            />
                            <div className="o-head-up__item o-head-up__item--top-right">
                                <button className="u-icon-line-height">
                                    <svg className="c-icon c-icon--xs" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 200 200">
                                        <path d="M122.4,100.1l71.7-71.7c3-3,4.7-7,4.7-11.3s-1.7-8.3-4.7-11.3c-6.2-6.2-16.3-6.2-22.5,0L99.9,77.6 L28.2,5.9c-3-3-7-4.7-11.3-4.7c-4.3,0-8.3,1.7-11.3,4.7c-6.2,6.2-6.2,16.3,0,22.5l71.7,71.7L5.7,171.8c-3,3-4.7,7-4.7,11.3 c0,4.3,1.7,8.3,4.7,11.3c3,3,7,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7l71.7-71.7l71.7,71.7c3,3,7,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7 c3-3,4.7-7,4.7-11.3s-1.7-8.3-4.7-11.3L122.4,100.1z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Link>
                    <div className="o-product__header o-distance-s">
                        <div className="o-product__header__large-column">
                            <h3 className="c-title-level-4">{name}</h3>
                            <p className="u-text-s t-text-quiet">{variant.attributes.designer.label}</p>
                        </div>
                        <AtomsPrice className='c-teaser__price'
                                value={variant.discountedPrice || variant.price}
                                highlight={variant.discountedPrice && (this.props.showPercent || this.props.showStrikePrice)} />
                    </div>
                </article>
            </div>
        )
    }
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
}

ProductItem.defaultProps = {
}

export default ComponentInjector.return('ProductItem', ProductItem)
