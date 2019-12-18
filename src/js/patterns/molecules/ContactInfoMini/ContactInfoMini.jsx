import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as PhoneIcon } from '../../../../icons/phone.svg'

const ContactInfoMini = ({ phoneNumber, phoneNumberSubline, email, emailOverline }) => {
    return (
        <>
            <div className='o-block-short o-block-short--centered'>
                <PhoneIcon className='c-icon o-block-short__short-item u-text-color-ghost' />
                <div className='o-block-short__body'>
                    <strong className='u-text-strong'>{phoneNumber}</strong> <br />
                    <p className='u-text-s'>{phoneNumberSubline}</p>
                </div>
            </div>
            <p className='o-distance-m'>
                <span className='u-text-s'>{emailOverline}</span> <br />
                <a href={email} title='' className='c-link c-link--ghost'>
                    <strong>{email}</strong>
                </a>
            </p>
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
