import React from 'react'
import { FormattedMessage } from 'react-intl'
import { ReactComponent as LeftIcon } from 'Icons/tailwind-icons/icon-cheveron-left.svg'

export default {
    title: 'Account orders',
}

export const accountOrders = () => {
    return (
        <>
            <div className='m-auto md:flex md:w-11/12 text-neutral-900'>
                <div className='flex-auto md:order-2 md:mt-10 md:w-7/12 md:ml-4 lg:ml-5'>
                    <div className='font-bold text-2xl my-5 md:ml-6 flex'>
                        <button>
                            <LeftIcon className='md:hidden mx-3 text-3xl' />
                        </button>
                        Orders
                    </div>
                    <div className='text-neutral-900 md:shadow-lg md:-ml-4'>
                        <div className='border-b-4 border-neutral-200 mt-4 md:mt-0' />
                        <div className='text-sm m-6'>
                            <div>
                                <span className='text-neutral-600 mr-1'>
                                    <FormattedMessage id='order.date' />
                                </span>
                                <span className='font-bold mb-4'>
                                    30, August 2019
                                </span>
                            </div>
                            <div>
                                <span className='text-neutral-600 mr-1'>
                                    <FormattedMessage id='order.paymentMethod' />
                                </span>
                                <span className='font-bold'>
                                    Invoice
                                </span>
                            </div>
                        </div>
                        <div className='border-b-4 border-neutral-200' />

                        <div className='ml-4 mt-6 text-neutral-600 font-bold text-sm'>
                            <FormattedMessage id='order.yourOrderCaps' />
                        </div>
                        <div className='text-sm grid grid-cols-120-1xfr grid-rows-auto-1fr sm:grid-rows-1 col-gap-4 row-gap-3 my-6 mx-4'>
                            <div>
                                <img src='https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079997_1_large.jpg' alt='' />
                            </div>
                            <div className='text-sm mt-2'>
                                <div className='font-bold mb-4' >
                                    Balloon Sleeve Sweater
                                </div>
                                <div className='text-neutral-600 my-6'>
                                    <div>
                                        <span><FormattedMessage id='order.colorOrder' /></span>
                                        <span>Yellow</span>
                                    </div>
                                    <div>
                                        <span><FormattedMessage id='order.sizeOrder' /></span>
                                        <span>EU 38</span>
                                    </div>
                                    <div>
                                        <span><FormattedMessage id='account.quantity' /></span>
                                        <span>1</span>
                                    </div>
                                </div>
                                <div className='font-bold'>
                                    39,90€
                                </div>
                            </div>
                        </div>
                        <div className='border-b-4 border-neutral-200' />

                        <div className='m-4'>
                            <div className='mt-6 text-neutral-600 font-bold text-sm'>
                                <FormattedMessage id='order.shippingInformationCaps' />
                            </div>
                            <div className='my-3'>
                                <div className='text-neutral-900 font-bold'>
                                    Alexandra Jones
                                </div>
                                <div>Praesidenten Str. 79</div>
                                <div>Rheinland</div>
                                <div>67727</div>
                                <div className='mb-3'>
                                    Germany
                                </div>
                                <div>
                                    <div className='border-b border-neutral-200' />
                                    <div className='my-3'>
                                        <div>0309829381</div>
                                        <div>wmahler@patrics.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-b-4 border-neutral-200' />

                        <div className='m-4'>
                            <div className='mt-6 text-neutral-600 font-bold text-sm'>
                                <FormattedMessage id='order.billingInformationCaps' />
                            </div>
                            <div className='my-3'>
                                <div className='text-neutral-900 font-bold'>
                                    Alexandra Jones
                                </div>
                                <div>Praesidenten Str. 79</div>
                                <div>Rheinland</div>
                                <div>67727</div>
                                <div className='mb-3'>
                                    Germany
                                </div>
                                <div>
                                    <div className='border-b border-neutral-200' />
                                    <div className='my-3'>
                                        <div>0309829381</div>
                                        <div>wmahler@patrics.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-b-4 border-neutral-200' />

                        <div className='my-5 mx-4 pb-8'>
                            <div className='mt-3 font-bold flex justify-between'>
                                <span className=''><FormattedMessage id='account.totalAmountOrder' /></span>
                                139,90€
                            </div>
                            <div className='text-sm text-neutral-600'>
                                <FormattedMessage id='order.includesVAT' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
