import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/button'
import OrganismsHeaderSlideIn from '../../organisms/base/header-slide-in'
import OrganismsFormEmailChange from '../../organisms/form/form-email-change'

const TemplatesMyEmailChange = ({ products }) => {
    return (
        <div className='o-television'>
            <OrganismsHeaderSlideIn setIsOpen={() => {}} title='E-Mail-Adresse ändern' className='o-television__bar' />
            <div className='o-television__display'>
                <div className='o-container-small'>
                    <p className='u-text-s'>Wir stellen sicher, dass alle E-Mails von Boost an deine neue E-Mail-Adresse geschickt werden.</p>
                    <div className='o-distance'>
                        <dt className='u-text-s t-text-quiet'>Aktuelle E-Mail-Adresse:</dt>
                        <dd className='u-text-s u-text-strong'>John.Doe@gmail.com</dd>
                    </div>
                    <div className='o-distance'>
                        <OrganismsFormEmailChange />
                        <Button type='primary' size='boss' className='o-distance-m'>Speichern</Button>
                    </div>
                </div>
            </div>
            <div className='o-television__remote-control' />

        </div>
    )
}

TemplatesMyEmailChange.propTypes = {
    products: PropTypes.array.isRequired,
}

export default TemplatesMyEmailChange
