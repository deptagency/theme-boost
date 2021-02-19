import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { useForm } from 'react-hook-form'

import Price from 'Atoms/price'

const ShippingMethod = ({ availableShippingMethods, defaultValues = {}, onSubmit }) => {
    const { register, getValues, setValue } = useForm({ mode: 'onChange',
        defaultValues: {
            shippingMethodId: defaultValues ? defaultValues.shippingMethodId : null,
        },
    })

    const onChange = () => {
        onSubmit(getValues())
    }

    const onSelect = (method) => {
        setValue('shippingMethodId', method.shippingMethodId)

        onChange()
    }

    const getShippingMethodPrice = (method) => {
        return method.rates.reduce((a, b) => (a + b.price), 0)
    }

    return (
        <form onChange={onChange}>
            <div className='mb-4 text-xs text-neutral-600 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.shippingMethods'} />
            </div>

            {availableShippingMethods?.map((method, i) => {
                return (
                    <div key={i} className='mb-4 px-4 py-3 border border-neutral-400 rounded flex items-center h-20 cursor-pointer' onClick={() => { onSelect(method) }}>
                        <input type='radio' aria-label='Shipping method' name='shippingMethodId' value={method.shippingMethodId} id={method.name} className='mr-2'
                            ref={register()}
                        />
                        <div className='flex flex-col w-full'>
                            <div className='text-md leading-tight capitalize'>
                                {method.name}
                            </div>
                            {method.description && (
                                <span className='text-xs text-neutral-600'>
                                    {method.description}
                                </span>
                            )}
                        </div>

                        <span className='text-md ml-auto font-bold'>
                            {getShippingMethodPrice(method) ? <Price value={getShippingMethodPrice(method)} /> : <span className='uppercase'><FormattedMessage id={'checkout.freeShipping'} /> </span> }
                        </span>
                    </div>
                )
            })}
        </form>
    )
}

ShippingMethod.propTypes = {
    defaultValues: PropTypes.object,
    availableShippingMethods: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
}

export default ShippingMethod
