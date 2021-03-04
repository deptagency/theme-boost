import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import Price from 'Atoms/price'

const ShippingMethod = ({ shippingMethod, onSubmit }) => {
    const availableShippingMethods = useSelector((state) => {
        return state.cart && state.cart.availableShippingMethods && state.cart.availableShippingMethods.data
    })

    const { register, getValues, setValue } = useForm({ mode: 'onChange',
        /* defaultValues: {
            shippingMethodId: defaultValues ? defaultValues.shippingMethodId : null,
        }, */
    })

    const onChange = () => {
        onSubmit(getValues())
    }

    const getShippingMethodPrice = (shippingMethod) => {
        return shippingMethod.rates.reduce((a, b) => (a + b.price), 0)
    }

    return (
        <form onChange={onChange}>
            <div className='mb-4 text-xs text-neutral-600 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.shippingMethods'} />
            </div>

            {availableShippingMethods?.map((method, i) => {
                return (
                    <div key={i}
                        className={classnames({
                            'px-4 py-3 border border-neutral-400 rounded flex items-center h-16 cursor-pointer': true,
                            'mt-2': i > 0,
                        })}
                        onClick={() => {
                            setValue('shippingMethodId', method.shippingMethodId)

                            onChange()
                        }}
                    >
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
                            {getShippingMethodPrice(method) ? <Price value={getShippingMethodPrice(method)} /> : <span className='uppercase'><FormattedMessage id={'checkout.freeShipping'} /></span> }
                        </span>
                    </div>
                )
            })}
        </form>
    )
}

ShippingMethod.propTypes = {
    shippingMethod: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
}

export default ShippingMethod
