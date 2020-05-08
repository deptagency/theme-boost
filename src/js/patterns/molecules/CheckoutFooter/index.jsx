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
        <MarginBreakout 
        // variant='fixed bottom-0 w-full'
        >
            <div className='bg-gray-200 h-12 text-sm pt-3 pl-4 text-gray-800'>
                <button
                    className='flex'
                    onClick={(event) => {
                        event.preventDefault()
                        app.getRouter().replace('Frontastic.Frontend.Master.Checkout.cart')
                    }}
                >
                    <IconArrowLeft className='mr-2 text-base fill-current text-gray-800' />
                    <FormattedMessage id='checkout.backToCart' />
                </button>
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
