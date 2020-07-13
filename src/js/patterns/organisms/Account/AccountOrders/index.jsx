import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import app from 'frontastic-catwalk/src/js/app/app'

import Button from 'Atoms/button'
import PanelBlockResponsive from 'Molecules/Layout/PanelBlockResponsive'
import ListOrders from './ListOrders'
import SelectedOrder from './SelectedOrder'

import useSlidePanel from 'Molecules/Layout/Breakpoints/useSlidePanel'

import { ReactComponent as CloseIcon } from 'Icons/tailwind-icons/icon-close-black.svg'
import { ReactComponent as IconEmotionSad } from 'Icons/tailwind-icons/icon-emotion-sad.svg'

const AccountOrders = ({ openPanel, onClose, orders }) => {
    const [selectedOrder, setSelectedOrder] = useState(null)
    const { usePanel } = useSlidePanel()
    console.log('ORDERS', orders)

    return (
        <PanelBlockResponsive
            title={!selectedOrder && <FormattedMessage id='account.placedOrders' />}
            isOpen={openPanel}
            onClose={onClose}
            >

            {orders.length ? (
                !selectedOrder && <ListOrders orders={orders} selectOrder={setSelectedOrder} />
            ) : (
                <div className='md:shadow-lg md:order-2 md:ml-5'>
                    <div className='border-b-4 border-gray-100' />

                    <div className='flex flex-col text-center w-64 mx-auto my-10 md:pb-56'>
                        <div className='mx-auto mb-3'>
                            <IconEmotionSad className='w-8 h-8 text-gray-800 fill-current' />
                        </div>
                        <div>
                            <div className='font-bold text-2xl mb-2'>
                                <FormattedMessage id='order.noOrders' />
                            </div>
                        </div>
                        <Button
                            variant='btn btn-indigo mt-6 mr-2'
                            onClick={() => {
                                app.getRouter().history.replace('/')
                            }}
                        >
                            <FormattedMessage id='checkout.continueShopping' />
                        </Button>
                    </div>
                </div>
            )}

            <PanelBlockResponsive
                title={selectedOrder &&
                    <div className='grid grid-cols-2'>
                        <div className='pt-3 md:pt-0'>
                            <FormattedMessage id='account.order' />
                            <div>#{selectedOrder.orderId}</div>
                        </div>
                        {!usePanel && <div
                            className='justify-self-end p-4 cursor-pointer'
                            onClick={() => { setSelectedOrder(null) }}
                        >
                            <CloseIcon className='fill-current text-gray-800' />
                        </div>}
                    </div>
                }
                isOpen={!!selectedOrder}
                onClose={() => { setSelectedOrder(null) }}
            >
                {selectedOrder && <SelectedOrder order={selectedOrder} />}
            </PanelBlockResponsive>

        </PanelBlockResponsive>
    )
}

AccountOrders.propTypes = {
    openPanel: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    orders: PropTypes.array.isRequired,
}

export default AccountOrders
