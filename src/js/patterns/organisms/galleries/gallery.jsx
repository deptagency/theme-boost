import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import Slider from '../../../patterns/templates/slider'

class OrganismsGallery extends Component {
    render () {
        const { images, addToWishlist } = this.props

        return (<div>
            <div className='c-gallery'>
                <div className='c-gallery__spot-area o-head-up'>
                    <div className='o-head-up__item o-head-up__item--top-right u-hidden-medium-up'>
                        <button>
                            <svg className='c-icon c-icon--m' version='1.1' width='24' height='24' viewBox='0 0 24 24'>
                                <title>Produkt schließen</title>
                                <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                            </svg>
                        </button>
                    </div>
                    <div className='o-head-up__item o-head-up__item--top-left u-hidden-medium-up'>
                        <button
                            className='c-button c-button--control'
                            onClick={addToWishlist}
                        >
                            <svg className='c-icon c-icon--s' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>love-it-alternate</title><path d='M23.305,5.075A6.583,6.583,0,0,0,12.858,3.367L12,4.148l-.828-.754A6.525,6.525,0,0,0,5.485,1.587,6.476,6.476,0,0,0,.7,5.075,6.4,6.4,0,0,0,1.91,12.544L11.283,22.2a1,1,0,0,0,1.434,0l9.359-9.638A6.416,6.416,0,0,0,23.305,5.075Zm-2.648,6.076-8.3,8.545a.5.5,0,0,1-.717,0l-8.313-8.56A4.419,4.419,0,0,1,2.48,5.98,4.494,4.494,0,0,1,5.806,3.562,4.564,4.564,0,0,1,9.8,4.845l1.53,1.4a1,1,0,0,0,1.347,0l1.561-1.423A4.546,4.546,0,0,1,18.2,3.562,4.492,4.492,0,0,1,21.521,5.98,4.427,4.427,0,0,1,20.657,11.151Z' /></svg>
                        </button>
                    </div>
                    {/* Commenting out for the time being, until the functionality is implemented */}
                    {/* <div className='o-head-up__item o-head-up__item--middle-bottom u-hidden-medium-up'>
                        <button className='c-button c-button--quiet u-box-shadow'>
                            <span className='o-flex o-flex--center'>
                                <svg className='c-icon c-icon--s o-flex__item' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                    <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
                                    <path fill='none' d='M0 0h24v24H0V0z' />
                                    <path d='M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z' />
                                </svg>
                                <span className='o-flex__item'>Vergrößern</span>
                            </span>
                        </button>
                    </div> */}
                    <Slider options={{ items: 1, responsive: {} }}>
                        {images.map((url, i) => {
                            return (
                                <div key={i}>
                                    <img src={url} alt='' />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <ul className='c-gallery__thumb-bar'>
                    {images.map((url, i) => {
                        return <li key={i} className='c-gallery__thumb-bar__item is-active'>
                            <img src={url} alt='' />
                        </li>
                    })}
                </ul>
            </div>
        </div>)
    }
}

OrganismsGallery.propTypes = {
    images: PropTypes.array.isRequired,
    addToWishlist: PropTypes.func,
}

OrganismsGallery.defaultProps = {
    images: [],
    addToWishlist: () => {},
}

export default ComponentInjector.return('OrganismsGallery', OrganismsGallery)
