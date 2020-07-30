import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'

import { ReactComponent as EditIcon } from 'Icons/tailwind-icons/icon-edit.svg'

const PaymentMethod = ({ payments, onClick }) => {
    return (
        <>
            <div className='mb-3 flex items-center justify-between'>
                <span className='text-xs text-neutral-500 font-bold leading-tight uppercase'>
                    <FormattedMessage id={'checkout.paymentMethod'} />
                </span>

                <span className='text-sm text-primary-main leading-tight cursor-pointer flex items-center' onClick={onClick}>
                    <FormattedMessage id={'checkout.edit'} /> <EditIcon className='inline fill-current text-sm ml-2' />
                </span>
            </div>

            <div className='text-md text-neutral-800 leading-tight'>
                {payments.map((payment, index) => {
                    return (
                        <span key={index} className={classnames({ 'mt-8': index > 0 })}>
                            {payment.paymentMethod}
                        </span>
                    )
                })}
            </div>
        </>
    )
}

PaymentMethod.propTypes = {
    payments: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default PaymentMethod
