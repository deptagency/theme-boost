import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'
import app from '@frontastic/catwalk/src/js/app/app'

import Price from 'Atoms/price'
import Button from 'Atoms/button'
import LoaderButton from 'Molecules/Loaders/LoaderButton'

import { ReactComponent as IconClose } from 'Icons/tailwind-icons/icon-close-white.svg'

const Summary = ({ sum, items, shippingMethod = null, taxed = null, discountCodes = null, disabled = false, isLoading = false, onClick, label, showVouchers = true }) => {
    const totalTaxes = taxed?.taxPortions?.reduce((a, b) => (a + b.amount), 0)

    const productPrice = items.reduce((a, b) => {
        if (b.discountedPrice) {
            return a + b.discountedPrice * b.count
        } else {
            return a + b.price * b.count
        }
    }, 0)
    
    const productTotalPrice = items.reduce((a, b) => (a + b.totalPrice), 0)

    const allDiscounts = productTotalPrice - productPrice

    const onRemoveDiscount = (discountId) => {
        app.getLoader('cart')
            .removeDiscount(discountId)
    }

    return (
        <section>
            <div className='mb-4 grid grid-cols-2 col-gap-6 row-gap-2'>
                <p className='text-md text-neutral-900 leading-normal'>
                    <FormattedMessage id='cart.subtotal' />
                </p>
                <p className='text-md text-right text-neutral-900 uppercase leading-normal'>
                    <Price value={productPrice} />
                </p>

                {shippingMethod ?
                    <>
                        <p className='text-md text-neutral-900 leading-normal'>
                            <FormattedMessage id='cart.shippingCosts' />
                        </p>
                        <p className='text-md text-right text-neutral-900 uppercase leading-normal'>
                            {shippingMethod.price ? <Price value={shippingMethod.price} /> : <FormattedMessage id='checkout.freeShipping' /> }
                        </p>
                    </>
                : null}                

                {discountCodes && discountCodes.length > 0 && (
                    <>
                        <p className='mt-2 text-md text-neutral-900 leading-none font-bold'>
                            <FormattedMessage id='cart.discounts' />
                        </p>
                        <p className='text-md text-right text-neutral-900 uppercase leading-normal'>
                            <Price value={allDiscounts} />
                        </p>

                        {discountCodes.map((discount, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <p className='text-md text-neutral-900 leading-normal'>
                                        {discount.code}
                                    </p>
                                    <p className='text-md text-right text-neutral-900 uppercase leading-normal'>
                                        <button
                                            className='ml-auto w-5 h-5 bg-neutral-300 rounded-full focus:outline-none'
                                            aria-label={<FormattedMessage id='cart.removeDiscount' />}
                                            onClick={() => onRemoveDiscount(discount.discountId) }
                                        >
                                            <IconClose className='w-full h-full p-1 flex items-center justify-center text-white fill-current' />
                                        </button>
                                    </p>
                                </React.Fragment>
                            )
                        })}
                    </>
                )}

                <span className='mb-3 block w-full h-px bg-neutral-300 col-start-auto col-end-span-2' />

                <p className='text-md text-neutral-900 leading-none font-bold'>
                   <FormattedMessage id='cart.totalAmount' />
                </p>

                <p className='text-md text-right text-neutral-900 leading-none font-bold'>
                   <Price value={sum} />
                </p>

                <div className='text-sm text-neutral-600 col-start-auto col-end-span-2'>
                    (<FormattedMessage id='cart.totalAmount' /> {totalTaxes && <Price value={totalTaxes} />} <FormattedMessage id='cart.inclVat' />)
                </div>
           </div>

            {onClick && (
                <Button
                    name={label}
                    variant={classnames({
                        'btn-pill bg-primary-500 text-white w-full h-10 focus:outline-none': true,
                        'cursor-default': isLoading || disabled,
                    })}
                    onClick={onClick}
                    disabled={isLoading || disabled}
                >
                    {isLoading ? <LoaderButton /> : label}
                </Button>
            )}

            {showVouchers && (
                <p className='mt-4 text-xs text-neutral-500 text-center'>
                    <FormattedMessage id='cart.enterVouchers' />
                </p>
            )}
        </section>
    )
}

Summary.propTypes = {
    items: PropTypes.array,
    sum: PropTypes.number.isRequired,
    shippingMethod: PropTypes.object,
    taxed: PropTypes.object,
    discountCodes: PropTypes.array,
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    showVouchers: PropTypes.bool,
    isLoading: PropTypes.bool,
}

export default Summary
