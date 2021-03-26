import React from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import PropTypes from 'prop-types'

import FullPageWidthWrapper from '../Layout/FullPageWidthWrapper'
import { ReactComponent as IconArrowLeft } from '../../../../icons/tailwind-icons/icon-arrow-left.svg'
import MetaNav from '../Footer/MetaNav'
import app from 'frontastic-catwalk/src/js/app/app'

const CheckoutFooter = ({ intl, links, title }) => {
    return (
        <FullPageWidthWrapper>
            <div className='h-15 bg-neutral-200 p-4'>
                <div className='flex items-center h-full'>
                    <button
                        aria-label={intl.formatMessage({ id: 'checkout.backToCart' })}
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
            <MetaNav title={title} links={links} />
        </FullPageWidthWrapper>
    )
}

CheckoutFooter.propTypes = {
    intl: intlShape.isRequired,
    title: PropTypes.string,
    links: PropTypes.array,
}

export default injectIntl(CheckoutFooter)
