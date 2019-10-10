import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from '../../../app/injector'
import { isNull, isUndefined } from 'lodash'

import MoleculesSticker from '../sticker/sticker'
import MoleculesWishlist from '../wishlist/wishlist'
import MoleculesColorSwatch from '../colorswatches/colorswatch'
import NoImage from 'frontastic-catwalk/src/layout/noImage.svg' // TODO Sanja

class MoleculesProduct extends Component {
    render () {
        const { product: { name, variants }, width, className } = this.props

        // TODO Sanja uncomment later
        // const price = isNull(variants[0].price) ? false : variants[0].price // 39,95
        // const discountedPrice = isNull(variants[0].discountedPrice) ? false : variants[0].discountedPrice // 24,95
        // const designer = isNull(variants[0].designer) ? false : variants[0].designer // Vero Moda

        const price = isNull(variants[0].price) ? '39,95' : variants[0].price // 39,95
        const discountedPrice = isNull(variants[0].discountedPrice) ? '24,95' : variants[0].discountedPrice // 24,95
        const designer = isNull(variants[0].designer) || isUndefined(variants[0].designer) ? 'Vero Moda' : variants[0].designer // Vero Moda

        let style = {}
        if (typeof width !== 'undefined') { style = { width } }

        return (<div className={className} style={style}>
            <article className='o-product'>
                <div className='o-product__asset' title=''>
                    <div className='o-head-up'>
                        {/* <img src={variants[0].images[0] || NoImage} alt='' className='' /> */}
                        <div style={{
                            backgroundImage: `url(${variants[0].images[0]})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                                // width,
                                height: '256px',
                        }}
                        />
                        <div className='o-head-up__item o-head-up__item--top-left'>
                            <MoleculesSticker />
                        </div>
                        <div className='o-head-up__item o-head-up__item--top-right'>
                            <MoleculesWishlist />
                        </div>
                        {/* <div className='o-head-up__item o-head-up__item--middle-right'>
                            <div className='o-product__options c-box t-ghost'>
                                <MoleculesColorSwatch />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='o-product__header o-distance-s'>
                    <div className='o-product__header__large-column'>
                        {/* <p className='t-text-quiet'>{name}</p> */}
                        <h3 className='c-title-level-4'>{name}</h3>
                        {designer && (<p className='t-text-quiet'>{designer}</p>)}
                    </div>
                    <div>
                        <ul className='o-list-bare o-list-bare--tighty'>
                            {discountedPrice && (<li className='o-list-bare__item'>
                                <span className='c-price c-price--highlight'>{discountedPrice} €</span>
                            </li>)}
                            {price && <li className='o-list-bare__item'>
                                <span className='c-price c-price--old'>{price} €</span>
                            </li>}
                        </ul>
                    </div>
                </div>
            </article>
        </div>)
    }
}

MoleculesProduct.propTypes = {
    product: PropTypes.object.isRequired,
    className: PropTypes.string,
    width: PropTypes.string,
}

MoleculesProduct.defaultProps = {
}

export default ComponentInjector.return('MoleculesProduct', MoleculesProduct)
