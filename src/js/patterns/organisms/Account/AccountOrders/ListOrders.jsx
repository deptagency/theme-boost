import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Price from 'Atoms/price'

import { ReactComponent as FileIcon } from 'Icons/tailwind-icons/icon-file.svg'

const ListOrders = ({ orders, selectOrder }) => {
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <div className='md:shadow-lg'>
            <div className='border-b-4 border-neutral-200' />
            <div className='text-neutral-900'>
                {orders.map((order, index) => {
                    var lineItemSum = 0
                    order.lineItems.map(lineItem => {
                        return (
                            lineItemSum += lineItem.count
                        )
                    })
                    var lineItemPrice = 0
                    order.lineItems.map(lineItem => {
                        return (
                            lineItemPrice += lineItem.price
                    )
                    })
                    return (
                        <div key={order.orderId}>
                            <div className='my-6 ml-5' key={order.orderId}>
                                <div className='font-bold'>
                                    <FormattedMessage id='account.order' /> {order.orderId}
                                </div>
                                <div className='text-sm mb-4'>
                                    {new Date(order.createdAt).toLocaleString([], dateOptions)}
                                </div>
                                <div className='text-sm mb-5'>
                                    <div>
                                        <span className='text-neutral-600'><FormattedMessage id='account.trackingNumber' /></span>
                                        <span className='font-bold'> {order.cartId}</span>
                                    </div>
                                    <div>
                                        <span className='text-neutral-600'><FormattedMessage id='account.quantity' /></span>
                                        <span className='font-bold'>
                                            {lineItemSum}
                                        </span>
                                    </div>
                                    <div>
                                        <span className='text-neutral-600'><FormattedMessage id='account.totalAmountOrder' /> </span>
                                        <Price variant='font-bold' value={lineItemPrice} />
                                    </div>
                                </div>
                                <button
                                    className='text-sm text-primary-500 leading-tight flex items-center my-4'
                                    onClick={() => { selectOrder(order) }}
                                >
                                    <FormattedMessage id='account.viewOrder' />
                                    <FileIcon className='inline fill-current text-sm ml-2' />
                                </button>
                            </div>
                            {(index + 1 < orders.length) && <div className='border-b-4 border-neutral-200' />}
                        </div>
                    )
                })}
            </div>
            <div className='border-b-4 border-neutral-200' />
        </div>
    )
}

ListOrders.propTypes = {
    orders: PropTypes.array.isRequired,
    selectOrder: PropTypes.func.isRequired,
}

export default ListOrders
