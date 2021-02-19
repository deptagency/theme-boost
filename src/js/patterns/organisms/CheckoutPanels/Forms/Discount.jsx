import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'

import app from 'frontastic-catwalk/src/js/app/app'

const Discount = () => {
    const [discountCode, setDiscountCode] = useState('')

    const redeemDiscount = () => {
        if (discountCode) {
            app.getLoader('cart')
                .redeemDiscount(discountCode)
                .then(() => {
                    setDiscountCode('')
                })
        }
    }

    return (
        <>
            <div className='text-md text-neutral-700 leading-none font-bold'>
                <FormattedMessage id={'checkout.discount.message'} />
            </div>
            <input 
                type='text' 
                className='form-input my-2' 
                onChange={e => setDiscountCode(e.target.value)}
                value={discountCode}
            />
            <button 
                className='btn-pill bg-primary-500 text-white focus:outline-none w-full' 
                onClick={redeemDiscount}
            >
                <FormattedMessage id={'checkout.discount.apply'} />
            </button>
        </>
    )
}

export default Discount
