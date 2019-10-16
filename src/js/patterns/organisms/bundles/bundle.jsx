import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import wishlistHeart from '../../../../icons/wishlist-heart.svg'

import MoleculesDetaillist from '../../molecules/lists/detaillist'

class OrganismBundle extends Component {
    render () {
        const { showWishListIcon, showCloseIcon } = this.props

        return (<div className='c-product-row'>
            <article className='o-bundle'>
                <div className='o-bundle__asset o-head-up'>
                    <span className='o-head-up__item o-head-up__item--top-right'>
                        {showWishListIcon && <button><img src={wishlistHeart} width='24' height='24' alt='add to wish list' /></button>}
                    </span>
                    <img src='https://mosaic04.ztat.net/vgs/media/catalog-lg/BL/82/1D/00/7K/11/BL821D007-K11@9.jpg' alt='' />
                </div>
                <div className='o-bundle__header'>
                    <div>
                        <h3 className='c-title-level-4'>Vero Moda</h3>
                        <p className='t-text-quiet'>Ballkleid</p>
                    </div>
                    <button>
                        {showCloseIcon && <svg width="20" height="20" class="c-icon c-icon--s c-icon--outline t-text-quiet" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* eslint-disable */}
                                <path d="M1.25 3.75H18.75" stroke="#97A5BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.875 1.25H8.125C7.79348 1.25 7.47554 1.3817 7.24112 1.61612C7.0067 1.85054 6.875 2.16848 6.875 2.5V3.75H13.125V2.5C13.125 2.16848 12.9933 1.85054 12.7589 1.61612C12.5245 1.3817 12.2065 1.25 11.875 1.25Z" stroke="#97A5BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.125 14.375V8.125" stroke="#97A5BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.875 14.375V8.125" stroke="#97A5BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.7208 17.6033C15.6949 17.9159 15.5524 18.2073 15.3216 18.4197C15.0909 18.6321 14.7887 18.75 14.475 18.75H5.52583C5.21218 18.75 4.90998 18.6321 4.6792 18.4197C4.44842 18.2073 4.30593 17.9159 4.28 17.6033L3.125 3.75H16.875L15.7208 17.6033Z" stroke="#97A5BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            {/* eslint-enable */}
                        </svg>}
                    </button>
                </div>
                <div className='o-bundle__body'>
                    <MoleculesDetaillist />
                    {this.props.showChangeCounter ?
                        <select name="" id="" className='o-distance-s'>
                          <option value="36">36</option>
                          <option value="38">38</option>
                          <option value="40">40</option>
                          <option value="42">42</option>
                          <option value="44">44</option>
                        </select>
                    : null }
                </div>
                <div className='o-bundle__footer'>
                  <span className='c-price'>39,95 €</span>
                  {this.props.showWishlistButton ?
                      <p><a href="" className='c-link c-link--quiet u-text-s'>Auf den Wunschzettel</a></p>
                  : null }
                </div>
            </article>
        </div>)
    }
}

OrganismBundle.propTypes = {
    showWishListIcon: PropTypes.bool,
    showCloseIcon: PropTypes.bool,
    showChangeCounter: PropTypes.bool,
    showWishlistButton: PropTypes.bool
}

OrganismBundle.defaultProps = {
    showWishListIcon: false,
    showCloseIcon: true,
    showChangeCounter: false,
    showWishlistButton: false
}

export default ComponentInjector.return('OrganismBundle', OrganismBundle)
