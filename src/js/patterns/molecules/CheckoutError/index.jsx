import React from 'react'
import Button from 'Atoms/button'
import { ReactComponent as IconEmotionSad } from 'Icons/tailwind-icons/icon-emotion-sad.svg'
import { FormattedMessage } from 'react-intl'
import app from 'frontastic-catwalk/src/js/app/app'

const CheckoutError = () => {
    return (
        <div className='text-center mt-10 md:mt-20'>
            <IconEmotionSad className='w-20 h-20 inline-block text-gray-400 fill-current ' />
            <div className='text-center text-gray-800 mt-4'>
                <p className='text-2xl font-bold'>
                    <FormattedMessage id='checkout.something' /> <br />
                    <FormattedMessage id='checkout.wentWrong' />  <br />
                    <FormattedMessage id='checkout.duringPayment' />
                </p>
                <p className='mt-3 text-sm'>
                    <FormattedMessage id='checkout.beenCharged' /> <br />
                    <FormattedMessage id='checkout.youCan' />
                </p>
                <Button
                    variant='btn-outline btn-outline-black mt-6'
                    onClick={(event) => {
                        event.preventDefault()
                        app.getRouter().replace('Frontastic.Frontend.Master.Checkout.checkout')
                    }}
                >
                    <FormattedMessage id='checkout.tryAgain' />
                </Button>
            </div>
        </div>
    )
}

export default CheckoutError
