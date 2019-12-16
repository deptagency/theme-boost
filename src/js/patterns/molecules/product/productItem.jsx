import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import AtomsPrice from '../../atoms/prices/price'

import IconButton from '../../../patterns/atoms/buttons/IconButton'
import { ReactComponent as CloseX } from '../../../../icons/close-x-mobile.svg'

class ProductItem extends Component {
    render () {
        let product = this.props.product

        const { name, variant } = product

        return (
            <div>
                <article className='o-product'>
                    <Link itemProp='url' to={product._url || ''}>
                        <div className='o-head-up'>
                            <img
                                className='tns-lazy'
                                src={variant.images[0]}
                                data-src={variant.images[0]}
                                alt={name}
                                style={{ width: '320px', margin: '0 auto' }}
                            />
                            <div className='o-head-up__item o-head-up__item--top-right'>
                                <IconButton
                                    className='u-icon-line-height'
                                    icon={<CloseX className='c-icon c-icon--s' />}
                                    onClick={(event) => {
                                        event.preventDefault()
                                        this.props.removeWishlistItem(product)
                                    }} />
                            </div>
                        </div>
                    </Link>
                    <div className='o-product__header o-distance-s'>
                        <div className='o-product__header__large-column'>
                            <h3 className='c-title-level-4'>{name}</h3>
                            <p className='u-text-s t-text-quiet'>{variant.attributes.designer.label}</p>
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
    showStrikePrice: PropTypes.bool,
    showPercent: PropTypes.bool,
    removeWishlistItem: PropTypes.func,
}

ProductItem.defaultProps = {
    showStrikePrice: false,
    showPercent: false,
}

export default ComponentInjector.return('ProductItem', ProductItem)
