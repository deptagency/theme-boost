import React from 'react'
import { ReactComponent as IconArrowLeft } from 'Icons/tailwind-icons/icon-arrow-left.svg'
import { FormattedMessage } from 'react-intl'
import app from 'frontastic-catwalk/src/js/app/app'

const CheckoutFooter = () => {
    return (
        <div className='bg-gray-200 h-12 text-sm pt-3 pl-4 text-gray-800'>
            <button
                className='flex'
                onClick={(event) => {
                    event.preventDefault()
                    app.getRouter().history.replace('/')
                }}
            >
                <IconArrowLeft className='mr-2 text-base fill-current text-gray-800' />
                <FormattedMessage id='checkout.backToShop' />
            </button>
        </div>
    )
}

export default CheckoutFooter
