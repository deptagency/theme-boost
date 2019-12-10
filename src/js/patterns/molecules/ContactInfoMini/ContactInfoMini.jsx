import React from 'react'

import { ReactComponent as PhoneIcon } from '../../../../icons/phone.svg'

export function ContactInfoMini({ phoneNumber, phoneNumberSubline, email, emailOverline }) {
    return (
        <>
            <div className='o-block-short o-block-short--centered'>
                <PhoneIcon className='c-page-footer__phone-icon' />
                <div>
                    <strong className='u-text-strong'>{phoneNumber}</strong> <br />
                    <span className='u-text-s'>{phoneNumberSubline}</span>
                </div>
            </div>
            <div className='o-distance-m c-page-footer__contact-email'>
                <p>
                    <span className='u-text-s'>{emailOverline}</span> <br />
                    <a href={email} title='' className='c-link c-link--ghost'>
                        <strong>{email}</strong>
                    </a>
                </p>
            </div>
        </>
    )
}
