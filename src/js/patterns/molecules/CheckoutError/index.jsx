import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Button from 'Atoms/button'
import { ReactComponent as IconEmotionSad } from 'Icons/tailwind-icons/icon-emotion-sad.svg'

const CheckoutError = ({ onClick }) => {
    return (
        <div className='my-10 md:mt-20 w-64 mx-auto text-center'>
            <IconEmotionSad className='w-20 h-20 inline-block text-neutral-400 fill-current' />

            <div className='mt-4 text-center text-neutral-900'>
                <p className='text-2xl font-bold'>
                    <FormattedMessage id='checkout.wentWrong' />
                </p>
                <p className='mt-3 text-sm'>
                    <FormattedMessage id='checkout.beenCharged' />
                </p>
                <Button
                    variant='btn-outline btn-outline-black mt-6'
                    onClick={(event) => {
                        event.preventDefault()
                        onClick()
                    }}
                >
                    <FormattedMessage id='checkout.tryAgain' />
                </Button>
            </div>
        </div>
    )
}

CheckoutError.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default CheckoutError
