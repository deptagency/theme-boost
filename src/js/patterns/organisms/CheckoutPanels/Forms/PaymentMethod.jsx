import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { FormattedMessage } from 'react-intl'
import { useForm } from 'react-hook-form'

const PaymentMethod = ({ paymentMethods, onSubmit }) => {
    const { register, getValues, setValue } = useForm({
        mode: 'onChange',
        /* defaultValues: {
            payment: defaultValues ? defaultValues.paymentMethod : null,
        }, */
    })

    const onChange = () => {
        onSubmit(getValues())
    }

    return (
        <form onChange={onChange}>
            <div className='mb-4 text-xs text-neutral-600 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.paymentMethod'} />
            </div>

            {paymentMethods?.paymentMethods?.map((paymentMethod, i) => {
                return (
                    <div
                        key={i}
                        className={classnames({
                            'px-4 py-3 border border-neutral-400 rounded flex items-center h-12 cursor-pointer': true,
                            'mt-2': i > 0,
                        })}
                        onClick={() => {
                            setValue('type', paymentMethod.type)

                            onChange()
                        }}
                    >
                        <input
                            type='radio'
                            aria-label='Payment method'
                            name='type'
                            value={paymentMethod.type}
                            className='mr-2'
                            ref={register()}
                        />
                        {paymentMethod.name}
                    </div>
                )
            })}
        </form>
    )
}

PaymentMethod.propTypes = {
    paymentMethods: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
}

export default PaymentMethod
