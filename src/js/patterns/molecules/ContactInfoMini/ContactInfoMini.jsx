import React from 'react'

import { ReactComponent as PhoneIcon } from '../../../../icons/phone.svg'

export function ContactInfoMini() {
    return (
        <div>
            <h2 className='u-text-m u-text-strong u-text-uppercase'>Kontakt</h2>
            <div className='o-distance-m'>
                <div className='o-block-short o-block-short--centered o-footer__contact-details'>
                    <PhoneIcon />
                    <div>
                        <strong className='u-text-strong t-text-ghost'>02300 77 77 5</strong> <br />
                        <span className='u-text-s'>24 Stunden Service</span>
                    </div>
                </div>
            </div>
            <div className='o-distance-m'>
                <p>
                    <span className='u-text-s'>Schreiben Sie uns</span> <br />
                    <a href='' title='' className='c-link c-link--ghost'>
                        <strong>hallo@frontastic.cloud</strong>
                    </a>
                </p>
            </div>
        </div>
    )
}
