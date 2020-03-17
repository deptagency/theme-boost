import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import OrganismsBundleListing from '../../organisms/listings/bundle-listing'
import OrganismsPaymentListingIcons from '../../organisms/listings/payment-listing-icons'

const CartListing = ({ cartItems, outerClassName }) => {
    return (
        <div className={outerClassName}>
            <section className='md:block md:p-8 md:border-2 md:border-solid md:border-gray-200 md:rounded-lg'>
                <h1 className='leading-tight md:text-5xl'><FormattedMessage id='cart.myCart' /></h1>
                <div>
                    <OrganismsBundleListing cartItems={cartItems} />
                </div>
            </section>
            <div className='mt-12 -mx-6 md:hidden'>
                <div className='w-full h-2 bg-gray-200' />
            </div>
            <section className='w-full max-w-1120px mt-12 md:block md:p-8 md:border-2 md:border-solid md:border-gray-200 md:rounded-lg'>
                <h2 className='leading-tight md:text-5xl'><FormattedMessage id='cart.paymentMethods' /></h2>
                <OrganismsPaymentListingIcons image={''} />
            </section>
            <div className='mt-12 -mx-6 md:hidden'>
                <div className='w-full h-2 bg-gray-200' />
            </div>
        </div>
    )
}

CartListing.propTypes = {
    cartItems: PropTypes.array.isRequired,
    outerClassName: PropTypes.string,
}

export default CartListing
