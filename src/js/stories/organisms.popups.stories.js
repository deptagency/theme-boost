import React from 'react'

import OrganismsOrder from 'js/patterns/organisms/orders/order'
import OrganismsPopupLogin from 'js/patterns/organisms/popups/popup-login'
import OrganismsPopupSepa from 'js/patterns/organisms/popups/popup-sepa'

export default {
    title: '3.Organisms|Popups',
}

export const popupLogin = () => {
    return (
        <OrganismsPopupLogin />
    )
}

popupLogin.story = {
    name: 'Form Login',
}

export const popupSepa = () => {
    return (
        <OrganismsPopupSepa />
    )
}

popupSepa.story = {
    name: 'Popup Sepa',
}