import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import PanelBlockResponsive from 'Molecules/Layout/PanelBlockResponsive'
import ListOrders from './ListOrders'
import SelectedOrder from './SelectedOrder'

import useSlidePanel from 'Molecules/Layout/Breakpoints/useSlidePanel'

import { ReactComponent as CloseIcon } from 'Icons/tailwind-icons/icon-close-black.svg'

const AccountOrders = ({ openPanel, onClose, orders }) => {
    const [selectedOrder, setSelectedOrder] = useState(null)
    const { usePanel } = useSlidePanel()

    return (
        <PanelBlockResponsive
            title={!selectedOrder && <FormattedMessage id='account.placedOrders' />}
            isOpen={openPanel}
            onClose={onClose}
            >

            {!selectedOrder && <ListOrders
                orders={orders}
                selectOrder={setSelectedOrder}
            />}

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
