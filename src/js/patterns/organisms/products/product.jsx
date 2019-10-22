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
                            {this.props.addable ?
                                <MoleculesWishlist />
                          :
                                <button className='u-icon-line-height'>
                                    <svg className='c-icon c-icon--xs' version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'
                                        viewBox='0 0 200 200'>
                                        <path d='M122.4,100.1l71.7-71.7c3-3,4.7-7,4.7-11.3s-1.7-8.3-4.7-11.3c-6.2-6.2-16.3-6.2-22.5,0L99.9,77.6
                                  L28.2,5.9c-3-3-7-4.7-11.3-4.7c-4.3,0-8.3,1.7-11.3,4.7c-6.2,6.2-6.2,16.3,0,22.5l71.7,71.7L5.7,171.8c-3,3-4.7,7-4.7,11.3
                                  c0,4.3,1.7,8.3,4.7,11.3c3,3,7,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7l71.7-71.7l71.7,71.7c3,3,7,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7
                                  c3-3,4.7-7,4.7-11.3s-1.7-8.3-4.7-11.3L122.4,100.1z' />
                                    </svg>

                                </button>
                          }
                        </div>
                    </div>
                </a>
                <div className='o-product__header o-distance-s'>
                    <div className='o-product__header__large-column'>
                        <h3 className='c-title-level-4'>{this.props.title}</h3>
                        <p className='u-text-s t-text-quiet'>{this.props.category}</p>
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
    price: PropTypes.string,
    oldPrice: PropTypes.string,
    newPrice: PropTypes.string,
    thumbClass: PropTypes.string,
    addable: PropTypes.bool,
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
