import React from 'react'
import PropTypes from 'prop-types'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import LinkList from '../../../patterns/molecules/lists/LinkList'
import Column from '../../../patterns/organisms/PageFooter/components/Column'

import { ReactComponent as PayPalIcon } from '../../../../icons/paypal.svg'
import { ReactComponent as VisaIcon } from '../../../../icons/visa.svg'
import { ReactComponent as MastercardIcon } from '../../../../icons/mastercard.svg'

// icon map - should mirror the options in the tastic schema
const paymentIcons = { paypal: <PayPalIcon />, visa: <VisaIcon />, mastercard: <MastercardIcon /> }

// returns an array of objects for the <LinkList/>
// component. the actual link can be omitted to
// render just the list of icons
function paymentMethodsFromData (paymentMethods) {
    return paymentMethods.map((method) => {
        return { children: paymentIcons[method.icon] }
    })
}

function FooterPaymentMethods ({ data }) {
    const paymentMethods = paymentMethodsFromData(data.paymentMethods)
    return (
        <Column title={<Translatable value={data.header} />}>
            <LinkList
                links={paymentMethods}
                className='c-page-footer__payment-methods'
                listClassName='o-list-inline'
                listItemClassName='o-list-inline__item'
            />
        </Column>
    )
}

FooterPaymentMethods.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FooterPaymentMethods
