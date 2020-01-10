import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Addressblock from 'js/patterns/organisms/blocks/addressblock'
import Button from 'js/patterns/atoms/buttons/button'
import HeaderMobile from 'js/patterns/organisms/base/header-mobile'
import Summary from 'js/patterns/organisms/blocks/summary'
import BundleListing from 'js/patterns/organisms/listings/bundle-listing'

const MyOrderDetailsDesktop = ({ products }) => {
    return (
        <Fragment>
            <HeaderMobile />
            <div className='o-container-medium'>
                <h2 className='c-title-area'>Order NumberP22KI23IACV</h2>
                <div className='o-grid o-grid--half o-grid--inline o-distance-m'>
                    <div>
                        <dt className='u-text-s t-text-quiet'>
                            <FormattedMessage id='order.date' />
                        </dt>
                        <dd className='u-text-s u-text-strong'>
                            <time>Mi, 10.09.2019</time>
                        </dd>
                    </div>
                    <div>
                        <dt className='u-text-s t-text-quiet'>
                            <FormattedMessage id='order.paymentMethod' />
                        </dt>
                        <dd className='u-text-s u-text-strong'>
                            <FormattedMessage id='order.invoice' />
                        </dd>
                    </div>
                </div>
                <div className='o-distance-m'>
                    <a href='' className='c-link o-block-short' title=''>
                        <span className='o-block-short__body'>
                            <FormattedMessage id='order.cancelItem' />
                        </span>
                        <svg className='c-icon c-icon--s o-block-short__short-item' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <title>
                                <FormattedMessage id='order.cancelItem' />
                            </title>
                            <path d='M15.7 11.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.4-0.4 0.4-1 0-1.4z' />
                        </svg>
                    </a>
                </div>
                <div className='c-frame o-distance-l'>
                    <div className='c-box t-quietlight'>
                        <div className='o-block-short'>
                            <svg className='c-icon c-icon--s o-block-short__short-item' version='1.1' x='0px' y='0px'
                                viewBox='0 0 200 200'>
                                <g>
                                    <circle className='st0' cx='102.2' cy='25.5' r='25.5' />
                                    <path className='st0' d='M59.9,65.3h54.7c6.8,0,11.9,6.2,10.6,12.9l-16.1,84c0,0-7.6,26.5,18.6,14.6c15.3-6.9,15.6-1.8,11.7,4.1
                            c-7.3,11-19.5,18.1-32.6,19c-10.1,0.7-22.7,0.5-35.6-10.7c0,0-13.9-8.7-3.7-51.6c4.1-17.2,6.2-28.5,7.2-36
                            c1-8.1-3.3-15.9-10.7-19.4l-7.1-3.4c-2.4-1.2-4-3.6-4-6.3v0C52.9,68.4,56.1,65.3,59.9,65.3z' />
                                </g>
                            </svg>
                            <div className='o-block-short__body'>
                                <p className='u-text-s'>
                                    <FormattedMessage id='order.openOrder' />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='o-distance-l'>
                        <p className='u-text-strong'>
                            <FormattedMessage id='order.paymentDetails' />
                        </p>
                        <div className='o-detaillist o-distance-m'>
                            <dt className='u-text-s t-text-quiet'><FormattedMessage id='order.payee' /></dt>
                            <dd className='u-text-s u-text-strong'>Zalando SE</dd>
                            <dt className='u-text-s t-text-quiet'><FormattedMessage id='order.iban' /></dt>
                            <dd className='u-text-s u-text-strong'>DE86 2054 4123 3123 21</dd>
                            <dt className='u-text-s t-text-quiet'><FormattedMessage id='order.bic' /></dt>
                            <dd className='u-text-s u-text-strong'>DEUT1242Das</dd>
                            <dt className='u-text-s t-text-quiet'><FormattedMessage id='order.bank' /></dt>
                            <dd className='u-text-s u-text-strong'>Deutsche Bank</dd>
                            <dt className='u-text-s t-text-quiet'><FormattedMessage id='order.paymentReason' /></dt>
                            <dd className='u-text-s u-text-strong'>10123141515214</dd>
                        </div>
                    </div>
                    <div className='o-distance'>
                        <h2 className='c-title-level-3'>
                        Verschickt am Do., 11.09.2019
                        </h2>
                        <div className='o-distance-m'>
                            <BundleListing />
                        </div>
                    </div>
                    <div className='o-distance'>
                        <h2 className='c-title-level-3'>
                            <FormattedMessage id='account.cancel' />
                        </h2>
                        <div className='o-distance-m o-disabled-area'>
                            <div className='t-ghost o-disabled-area__overlay' />
                            <BundleListing />
                        </div>
                    </div>
                    <div className='o-distance'>
                        <h2 className='c-title-level-3'>
                            <FormattedMessage id='order.total' />
                        </h2>
                        <div className='o-distance-m'>
                            <Summary />
                        </div>
                    </div>
                    <div className='o-distance'>
                        <h2 className='c-title-level-3'>
                            <FormattedMessage id='account.address.delivery' />
                        </h2>
                        <div className='o-distance-m'>
                            <Addressblock />
                        </div>
                    </div>
                    <div className='o-distance'>
                        <h2 className='c-title-level-3'>
                            <FormattedMessage id='account.address.invoiceAddress' />
                        </h2>
                        <div className='o-distance-m'>
                            <Addressblock />
                        </div>
                    </div>
                    <Button type='quiet' size='boss' className='o-distance'>
                        <FormattedMessage id='order.returnProducts' />
                    </Button>
                </div>
            </div>
        </Fragment>
    )
}

MyOrderDetailsDesktop.propTypes = {
    products: PropTypes.array.isRequired,
}

export default MyOrderDetailsDesktop
