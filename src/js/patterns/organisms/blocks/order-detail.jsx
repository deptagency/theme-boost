import React, { Component, Fragment } from 'react'

import Badge from '../../atoms/badges/badge'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrderDetail extends Component {
    render () {
        return (
            <Fragment>
                <div className='o-order-detail'>
                    <div className='o-order-detail__header'>
                        <div>
                            <p itemProp='price' className='c-price'>59,95 €</p>
                            <p className='u-text-s t-text-quiet'>12. Mai 2019</p>
                        </div>
                        <Badge type='danger' color='red'>
                            Storniert
                        </Badge>
                    </div>
                    <div className='o-order-detail__body'>
                        <div className='o-order-detail__counter'>
                            <p className='u-text-s t-text-quiet'>8. Artikel</p>
                            <p className='u-text-s t-text-quiet'>P22KI23IACV</p>
                        </div>
                    </div>
                    <div className='o-order-detail__previews'>
                        <div className='o-order-detail__previews__item'>
                            <div className='o-product'>
                                <a href='' className='o-product__asset' title=''>
                                    <img src='https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073328_1_medium.jpg' alt='' />
                                </a>
                                <div className='o-product__header o-distance-s u-hidden-until-large'>
                                    <div className='o-product__header__large-column'>
                                        <h3 className='c-title-level-4'>Product A</h3>
                                        <p className='u-text-s u-text-color-quiet'>Größe: 36</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='o-order-detail__previews__item'>
                            <div className='o-product'>
                                <a href='' className='o-product__asset' title=''>
                                    <div className='o-head-up'>
                                        <img src='https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073328_1_medium.jpg' alt='' />

                                        <div className='o-head-up__item o-head-up__item--full c-overlay'>
                                            <span className='c-title-level-2'>+5</span>
                                        </div>
                                    </div>
                                </a>
                                <div className='o-product__header o-distance-s u-hidden-until-large'>
                                    <div className='o-product__header__large-column'>
                                        <h3 className='c-title-level-4'>Product A</h3>
                                        <p className='u-text-s u-text-color-quiet'>Größe: 36</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='o-order-detail__footer'>
                        <a href='' className='c-link o-block-short'>
                            <span className='o-block-short__body'>
                                <FormattedMessage id='order.viewOrder' />
                            </span>
                            <svg className='c-icon o-block-short__short-item u-icon-line-height' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                <title>chevron-right</title>
                                <path d='M15.7 11.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.4-0.4 0.4-1 0-1.4z' />
                            </svg>
                        </a>
                    </div>
                </div>

            </Fragment>
        )
    }
}

OrderDetail.propTypes = {
}

OrderDetail.defaultProps = {
}

export default ComponentInjector.return('OrderDetail', OrderDetail)
