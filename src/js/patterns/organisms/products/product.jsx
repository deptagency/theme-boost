import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import MoleculesSticker from '../../molecules/sticker/sticker'
import MoleculesWishlist from '../../molecules/wishlist/wishlist'

class OrganismsProduct extends Component {
    render () {
        const { width } = this.props
        let style = {}
        if (typeof width !== 'undefined') { style = { width } }

        return (<div style={style}>
            <article className='o-product'>
                <a href='' className='o-product__asset' title=''>
                    <div className='o-head-up'>
                        <img src='https://mosaic04.ztat.net/vgs/media/catalog-lg/BL/82/1D/00/7K/11/BL821D007-K11@9.jpg' width='320px' alt='' className={this.props.thumbClass} />
                        {this.props.sale ?
                            <div className='o-head-up__item o-head-up__item--top-left'>
                                <MoleculesSticker />
                            </div>
                        : null }
                        <div className='o-head-up__item o-head-up__item--top-right'>
                            <MoleculesWishlist />
                        </div>
                    </div>
                </a>
                <div className='o-product__header o-distance-s'>
                    <div className='o-product__header__large-column'>
                        <h3 className='c-title-level-4'>{this.props.title}</h3>
                        <p className='t-text-quiet'>{this.props.category}</p>
                    </div>
                    <div>
                        {this.props.sale ?
                            <ul className='o-list-bare o-list-bare--tighty'>
                                <li className='o-list-bare__item'>
                                    <span className='c-price c-price--highlight'>{this.props.newPrice}</span>
                                </li>
                                <li className='o-list-bare__item'>
                                    <span className='c-price c-price--old u-text-s'>{this.props.oldPrice}</span>
                                </li>
                            </ul>
                        : <p className='c-price'>{this.props.price}</p>}
                    </div>
                </div>
            </article>
        </div>)
    }
}

OrganismsProduct.propTypes = {
    width: PropTypes.string,
    sale: PropTypes.bool,
    title: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.strong,
    oldPrice: PropTypes.string,
    salePrice: PropTypes.string,
    thumbClass: PropTypes.className,
}

OrganismsProduct.defaultProps = {
    sale: null,
    title: 'Vero Moda Freizeitkleid',
    category: 'Ballkleid',
    price: '39,95 €',
    oldPrice: null,
    newPrice: null,
    thumbClass: null,
}

export default ComponentInjector.return('OrganismsProduct', OrganismsProduct)
