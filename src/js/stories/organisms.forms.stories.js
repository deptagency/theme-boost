import React from 'react'

import AtomsFormLabel from 'js/patterns/atoms/forms/form-label'
import AtomsFormInput from 'js/patterns/atoms/forms/form-input'
import MoleculesFormFromTo from 'js/patterns/molecules/forms/form-element-from-to'
import OrganismsChoice from 'js/patterns/organisms/form/form-choice'
import OrganismsFormContact from 'js/patterns/organisms/form/form-contact'
import OrganismsFormLogin from 'js/patterns/organisms/form/form-login'
import OrganismsFormRegister from 'js/patterns/organisms/form/form-register'
import OrganismsFormCreditCard from 'js/patterns/organisms/form/form-credit-card'
import OrganismsFormSepa from 'js/patterns/organisms/form/form-sepa'
import OrganismsFormAddress from 'js/patterns/organisms/form/form-address'
import OrganismsFormAddressChange from 'js/patterns/organisms/form/form-address-change'
import OrganismsFormPasswordReset from 'js/patterns/organisms/form/form-password-reset'

export default {
    title: '3.Organisms|Forms',
}

export const inputRange = () => {
    return (
        <MoleculesFormFromTo />
    )
}

inputRange.story = {
    name: 'Input Range',
}

export const choice = () => {
    return (
        <OrganismsChoice />
    )
}

choice.story = {
    name: 'Choice',
}

export const row = () => {
    return (
        <div className='c-form-row'>
            <AtomsFormLabel />
            <AtomsFormInput />
            <a href='' className='c-link c-link--quiet o-flex o-flex--end'>Passwort vergessen?</a>
        </div>
    )
}

row.story = {
    name: 'Row',
}

export const contactForm = () => {
    return (
        <OrganismsFormContact />
    )
}

contactForm.story = {
    name: 'Contact Form',
}

export const loginForm = () => {
    return (
        <OrganismsFormLogin />
    )
}

loginForm.story = {
    name: 'Login Form',
}

export const registerForm = () => {
    return (
        <OrganismsFormRegister />
    )
}

registerForm.story = {
    name: 'Register Form',
}

export const creditCardForm = () => {
    return (
        <OrganismsFormCreditCard />
    )
}

creditCardForm.story = {
    name: 'Credit Card Form',
}

export const sepaForm = () => {
    return (
        <OrganismsFormSepa />
    )
}

sepaForm.story = {
    name: 'SEPA Form',
}

export const passwordResetForm = () => {
    return (
        <OrganismsFormPasswordReset />
    )
}

passwordResetForm.story = {
    name: 'Password Reset Form',
}

export const address = () => {
    return (
        <OrganismsFormAddress />
    )
}

address.story = {
    name: 'Address',
}

export const addressChange = () => {
    return (
        <OrganismsFormAddressChange />
    )
}

addressChange.story = {
    name: 'Address Change',
}
