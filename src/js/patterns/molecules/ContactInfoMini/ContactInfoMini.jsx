import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as PhoneIcon } from '../../../../icons/phone.svg'

const ContactInfoMini = ({ phoneNumber, phoneNumberSubline, email, emailOverline }) => {
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

ContactInfoMini.propTypes = {
    phoneNumber: PropTypes.object,
    phoneNumberSubline: PropTypes.object,
    email: PropTypes.object,
    emailOverline: PropTypes.object,
}

export { ContactInfoMini }
