import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Button from 'Atoms/button'
import { ReactComponent as IconCheckmarkCircle } from 'Icons/tailwind-icons/icon-check-circle.svg'

const CheckoutSuccess = ({ id, email, onClick }) => {
    return (
        <div className='my-10 md:mt-20 w-64 mx-auto text-center'>
            <IconCheckmarkCircle className='w-20 h-20 inline-block text-teal-500 fill-current' />

            <div className='mt-4 text-center text-gray-800'>
                <p className='text-2xl font-bold'>
                    <FormattedMessage id='checkout.orderConfirmed' />
                </p>
                <p className='mt-2 text-sm font-bold'>
                    Order ID: {id}
                </p>
                <p className='mt-3 text-sm'>
                    <FormattedMessage id='checkout.orderConfirmation' />
                    <span className='font-bold ml-1'>{email}</span>
                </p>
                <Button
                    variant='btn-outline btn-outline-black mt-6'
                    onClick={(event) => {
                        event.preventDefault()
                        onClick()
                    }}
                >
                    <FormattedMessage id='checkout.continueShopping' />
                </Button>
            </div>
        </div>
    )
}

CheckoutSuccess.propTypes = {
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CheckoutSuccess
