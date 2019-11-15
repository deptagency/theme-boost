import React from 'react'
import PropTypes from 'prop-types'

import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderSlideIn from 'js/patterns/organisms/base/header-slide-in'
import OrganismsFormPasswordChange from 'js/patterns/organisms/form/form-password-change'

const TemplatesMyPasswordChange = ({ products }) => {
    return (
        <div className='o-television'>
            <OrganismsHeaderSlideIn setIsOpen={() => {}} title='Passwort ändern' className='o-television__bar' />
            <div className='o-television__display'>
                <div className='o-container-small'>
                    <p className='u-text-s '>Zu deiner Sicherheit kannst du das Passwort jederzeit ändern.'</p>
                    <div className='o-distance'>
                        <OrganismsFormPasswordChange />
                        <MoleculesButton type='primary' size='boss' className='o-distance-m'>Speichern</MoleculesButton>
                    </div>
                </div>
            </div>
            <div className='o-television__remote-control' />

        </div>
    )
}

TemplatesMyPasswordChange.propTypes = {
    products: PropTypes.array.isRequired,
}

export default TemplatesMyPasswordChange
