
import React from 'react'
import app from 'frontastic-catwalk/src/js/app/app'

import { FormattedMessage } from 'react-intl'
import Button from 'Atoms/button'
import { ReactComponent as IconEmotionSad } from 'Icons/tailwind-icons/icon-emotion-sad.svg'

const NoOrders = () => {
    return (
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
    )
}

export default NoOrders
