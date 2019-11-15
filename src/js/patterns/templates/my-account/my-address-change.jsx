import React from 'react'
import PropTypes from 'prop-types'

import OrganismFormAddressChange from '../../organisms/form/form-address-change'
import MoleculesButton from '../../molecules/buttons/button'
import OrganismsHeaderSlideIn from '../../organisms/base/header-slide-in'

const TemplatesMyAddressChange = ({ products }) => {
    return (
        <div className='o-television'>
            <OrganismsHeaderSlideIn setIsOpen={() => {}} title='Adresse ändern' className='o-television__bar' />
            <div className='o-television__display'>
                <div className='o-container-small'>
                    <OrganismFormAddressChange />
                </div>
            </div>
            <div className='o-television__remote-control'>
                <div className='o-container-small'>
                    <MoleculesButton type='primary' size='boss'>Speichern</MoleculesButton>
                </div>
            </div>

        </div>
    )
}

TemplatesMyAddressChange.propTypes = {
    products: PropTypes.array.isRequired,
}

export default TemplatesMyAddressChange
