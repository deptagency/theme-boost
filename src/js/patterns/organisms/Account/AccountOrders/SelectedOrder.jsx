import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Price from '../../../atoms/price'

const SelectedOrder = ({ order }) => {
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <div className='text-neutral-900 md:shadow-lg md:-ml-4'>
            <div className='border-b-4 border-neutral-200 mt-4 md:mt-0' />
            <div className='text-sm m-6'>
                <div>
                    <span className='text-neutral-600 mr-1'>
                        <FormattedMessage id='order.date' />
                    </span>
                    <span className='font-bold mb-4'>{new Date(order.createdAt).toLocaleString([], dateOptions)}</span>
                </div>
                <div>
                    <span className='text-neutral-600 mr-1'>
                        <FormattedMessage id='order.paymentMethod' />
                    </span>
                    <span className='font-bold'>{order.payments[0].paymentMethod}</span>
                </div>
            </div>
            <div className='border-b-4 border-neutral-200' />

            <div className='ml-4 mt-6 text-neutral-600 font-bold text-sm'>
                <FormattedMessage id='order.yourOrderCaps' />
            </div>
            {order &&
                order.lineItems.map((item) => {
                    return (
                        <div className='text-sm grid grid-cols-120-1xfr grid-rows-auto-1fr sm:grid-rows-1 col-gap-4 row-gap-3 my-6 mx-4'>
                            <div>
                                <img src={item.variant.images[0]} alt='' />
                            </div>
                            <div className='text-sm mt-2'>
                                <div className='font-bold mb-4' key={item.lineItemId}>
                                    {item.name}
                                </div>
                                <div className='text-neutral-600 my-6'>
                                    {item.variant.attributes?.color && (
                                        <div>
                                            <span>
                                                <FormattedMessage id='order.colorOrder' />
                                            </span>
                                            <span>
                                                {item.variant.attributes.color?.label || item.variant.attributes.color}
                                            </span>
                                        </div>
                                    )}
                                    {item.variant.attributes?.commonSize && (
                                        <div>
                                            <span>
                                                <FormattedMessage id='order.sizeOrder' />
                                            </span>
                                            <span>
                                                {item.variant.attributes.commonSize?.label ||
                                                    item.variant.attributes.commonSize}
                                            </span>
                                        </div>
                                    )}
                                    {item.variant.attributes?.size && (
                                        <div>
                                            <span>
                                                <FormattedMessage id='order.sizeOrder' />
                                            </span>
                                            <span>
                                                {item.variant.attributes.size?.label || item.variant.attributes.size}
                                            </span>
                                        </div>
                                    )}
                                    <div>
                                        <span>
                                            <FormattedMessage id='account.quantity' />
                                        </span>
                                        <span>{item.count}</span>
                                    </div>
                                </div>
                                <div className='font-bold'>
                                    <Price value={item.price} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            <div className='border-b-4 border-neutral-200' />

            <div className='m-4'>
                <div className='mt-6 text-neutral-600 font-bold text-sm'>
                    <FormattedMessage id='order.shippingInformationCaps' />
                </div>
                <div className='my-3'>
                    <div className='text-neutral-900 font-bold'>
                        {order.shippingAddress.firstName} {order.shippingAddress.lastName}
                    </div>
                    <div>{order.shippingAddress.streetName}</div>
                    <div>{order.shippingAddress.city}</div>
                    <div>{order.shippingAddress.postalCode}</div>
                    <div className='mb-3'>{order.shippingAddress.country}</div>
                    <div className='border-b border-neutral-200' />
                    <div className='my-3'>
                        <div>{order.shippingAddress.phone}</div>
                        <div>{order.email}</div>
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
                        {order.billingAddress.firstName} {order.billingAddress.lastName}
                    </div>
                    <div>{order.billingAddress.streetName}</div>
                    <div>{order.billingAddress.city}</div>
                    <div>{order.billingAddress.postalCode}</div>
                    <div className='mb-3'>{order.billingAddress.country}</div>
                    <div>
                        <div className='border-b border-neutral-200' />
                        <div className='my-3'>
                            <div>{order.billingAddress.phone}</div>
                            <div>{order.email}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b-4 border-neutral-200' />

            <div className='my-5 mx-4 mb-12'>
                <div className='mt-3 font-bold flex justify-between'>
                    <span className=''>
                        <FormattedMessage id='account.totalAmountOrder' />
                    </span>
                    <Price value={order.sum} />
                </div>
                <div className='text-sm text-neutral-600'>
                    <FormattedMessage id='order.includesVAT' />
                </div>
            </div>
        </div>
    )
}

SelectedOrder.propTypes = {
    order: PropTypes.object.isRequired,
}

export default SelectedOrder
