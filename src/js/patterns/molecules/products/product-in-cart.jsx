import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

import MoleculesDetaillist from '../lists/detaillist'
import AtomsFormSelect from '../../atoms/forms/form-select'

class MoleculesProductInCart extends Component {
    render () {
        return (<div>
            <article className='o-product o-product--row'>
                <div className='o-product__asset o-head-up'>
                    <span className='o-head-up__item o-head-up__item--top-right'>
                        <svg className='c-icon c-icon--s' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>love-it-alternate</title><path d='M23.305,5.075A6.583,6.583,0,0,0,12.858,3.367L12,4.148l-.828-.754A6.525,6.525,0,0,0,5.485,1.587,6.476,6.476,0,0,0,.7,5.075,6.4,6.4,0,0,0,1.91,12.544L11.283,22.2a1,1,0,0,0,1.434,0l9.359-9.638A6.416,6.416,0,0,0,23.305,5.075Zm-2.648,6.076-8.3,8.545a.5.5,0,0,1-.717,0l-8.313-8.56A4.419,4.419,0,0,1,2.48,5.98,4.494,4.494,0,0,1,5.806,3.562,4.564,4.564,0,0,1,9.8,4.845l1.53,1.4a1,1,0,0,0,1.347,0l1.561-1.423A4.546,4.546,0,0,1,18.2,3.562,4.492,4.492,0,0,1,21.521,5.98,4.427,4.427,0,0,1,20.657,11.151Z' /></svg>
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
                            <svg version='1.1' x='0px' y='0px' viewBox='0 0 200 200' className='c-icon t-text-quiet'>
                                <path d='M122.4,100.1l71.7-71.7c3-3,4.7-7,4.7-11.3s-1.7-8.3-4.7-11.3c-6.2-6.2-16.3-6.2-22.5,0L99.9,77.6
                    	L28.2,5.9c-3-3-7-4.7-11.3-4.7c-4.3,0-8.3,1.7-11.3,4.7c-6.2,6.2-6.2,16.3,0,22.5l71.7,71.7L5.7,171.8c-3,3-4.7,7-4.7,11.3
                    	c0,4.3,1.7,8.3,4.7,11.3c3,3,7,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7l71.7-71.7l71.7,71.7c3,3,7,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7
                    	c3-3,4.7-7,4.7-11.3s-1.7-8.3-4.7-11.3L122.4,100.1z' />
                            </svg>
                        </button>
                    </div>
                    <div className='product-in-cart-amount'>
                        <AtomsFormSelect options={[1, 2, 3, 4, 5]} />
                    </div>
                    <div className='o-product__footer'>
                        <span className='c-price'>39,95 €</span>
                    </div>
                </div>
            </article>
        </div>)
    }
}

MoleculesProductInCart.propTypes = {
}

MoleculesProductInCart.defaultProps = {
}

export default ComponentInjector.return('MoleculesProductInCart', MoleculesProductInCart)
