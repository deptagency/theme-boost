import React from 'react'

import OrganismsPopupLogin from 'js/patterns/organisms/popups/popup-login'
import OrganismsPopupSepa from 'js/patterns/organisms/popups/popup-sepa'

export default {
    title: '4.Organisms|Popups',
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
