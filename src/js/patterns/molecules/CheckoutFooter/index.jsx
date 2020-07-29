import React from 'react'
import { ReactComponent as IconArrowLeft } from 'Icons/tailwind-icons/icon-arrow-left.svg'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import MarginBreakout from 'Molecules/Layout/MarginBreakout'
import MetaNav from '../Footer/MetaNav'
import app from 'frontastic-catwalk/src/js/app/app'

const CheckoutFooter = ({ links, title }) => {
    return (
        <MarginBreakout>
            <div className='h-15 bg-neutral-200 p-4'>
                <div className='flex items-center h-full'>
                    <button
                        className='flex items-center text-sm text-neutral-900'
                        onClick={(event) => {
                            event.preventDefault()
                            app.getRouter().replace('Frontastic.Frontend.Master.Checkout.cart')
                        }}
                    >
                        <IconArrowLeft className='mr-2 text-base fill-current text-neutral-900' />
                        <FormattedMessage id='checkout.backToCart' />
                    </button>
                </div>
            </div>
            <MetaNav
                title={<Translatable value={title} />}
                links={links}
            />
        </MarginBreakout>
    )
}

CheckoutFooter.propTypes = {
    title: PropTypes.object,
    links: PropTypes.array,
}

export default CheckoutFooter
