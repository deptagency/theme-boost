import React from 'react'
import PropTypes from 'prop-types'

import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderSlideIn from 'js/patterns/organisms/base/header-slide-in'
import OrganismsFormEmailChange from 'js/patterns/organisms/form/form-email-change'

const TemplatesMyEmailChange = ({ products }) => {
    return (
        <div className='o-television'>
            <OrganismsHeaderSlideIn setIsOpen={() => {}} title='E-Mail-Adresse ändern' className='o-television__bar' />
            <div className='o-television__display'>
                <p className='u-text-s '>Wir stellen sicher, dass alle E-Mails von Boost an deine neue E-Mail-Adresse geschickt werden.</p>
                <div className='o-distance'>
                    <dt className='u-text-s t-text-quiet'>Aktuelle E-Mail-Adresse:</dt>
                    <dd className='u-text-s u-text-strong'>John.Doe@gmail.com</dd>
                </div>
                <div className='o-distance'>
                    <OrganismsFormEmailChange />
                    <MoleculesButton type='primary' size='boss' className='o-distance-m'>Speichern</MoleculesButton>
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
