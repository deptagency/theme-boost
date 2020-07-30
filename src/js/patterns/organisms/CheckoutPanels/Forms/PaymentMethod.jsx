import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { useForm } from 'react-hook-form'

const PaymentMethod = ({ defaultValues = {}, onSubmit }) => {
    const { register, getValues } = useForm({ mode: 'onChange',
        defaultValues: {
            payment: defaultValues ? defaultValues.paymentMethod : null,
        },
    })

    const onChange = () => {
        onSubmit(getValues())
    }

    return (
        <form onChange={onChange}>
            <div className='mb-4 text-xs text-neutral-500 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.paymentMethod'} />
            </div>

            <div className='px-4 py-3 border border-neutral-400 rounded flex items-center'>
                <input type='radio' name='payment' value='invoice' id='invoice' className='mr-2'
                    ref={register()}
                />
                <label className='text-sm leading-tight' htmlFor='invoice'>
                    <FormattedMessage id={'checkout.invoice'} />
                </label>
            </div>
        </form>
    )
}

PaymentMethod.propTypes = {
    defaultValues: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
}

export default PaymentMethod
