import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from '../../../app/injector'
import wishlistHeart from '../../../../icons/wishlist-heart.svg'

import MoleculesDetaillist from '../lists/detaillist'

class MoleculesProductRow extends Component {
    render () {
        const { showWishListIcon, showCloseIcon } = this.props

        return (<div className='c-product-row'>
            <article className='o-product o-product--row'>
                <div className='o-product__asset o-head-up'>
                    <span className='o-head-up__item o-head-up__item--top-right'>
                        {showWishListIcon && <img src={wishlistHeart} width='24' height='24' alt='add to wish list' />}
                    </span>
                    <img src='https://mosaic04.ztat.net/vgs/media/catalog-lg/BL/82/1D/00/7K/11/BL821D007-K11@9.jpg' alt='' />
                </div>
                <div className='o-product__body'>
                    <div className='o-product__header'>
                        <div className='o-product__header__large-column'>
                            <h3 className='c-title-level-4'>Vero Moda</h3>
                            <p className='t-text-quiet'>Ballkleid</p>
                            <MoleculesDetaillist />
                        </div>
                        <button>
                            {showCloseIcon && <svg version='1.1' x='0px' y='0px' viewBox='0 0 200 200' className='c-icon t-text-quiet'>
                                {/* eslint-disable */}
                                <path d='M122.4,100.1l71.7-71.7c3-3,4.7-7,4.7-11.3s-1.7-8.3-4.7-11.3c-6.2-6.2-16.3-6.2-22.5,0L99.9,77.6
                    	L28.2,5.9c-3-3-7-4.7-11.3-4.7c-4.3,0-8.3,1.7-11.3,4.7c-6.2,6.2-6.2,16.3,0,22.5l71.7,71.7L5.7,171.8c-3,3-4.7,7-4.7,11.3
                    	c0,4.3,1.7,8.3,4.7,11.3c3,3,7,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7l71.7-71.7l71.7,71.7c3,3,7,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7
                    	c3-3,4.7-7,4.7-11.3s-1.7-8.3-4.7-11.3L122.4,100.1z' />
                                {/* eslint-enable */}
                            </svg>}
                        </button>
                    </div>
                    <div className='o-product__footer'>
                        <span className='c-price'>39,95 €</span>
                    </div>
                </div>
            </article>
        </div>)
    }
}

MoleculesProductRow.propTypes = {
    showWishListIcon: PropTypes.bool,
    showCloseIcon: PropTypes.bool,
}

MoleculesProductRow.defaultProps = {
    showWishListIcon: true,
    showCloseIcon: true,
}

export default ComponentInjector.return('MoleculesProductRow', MoleculesProductRow)
