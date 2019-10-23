import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import OrganismFormAddressChange from 'js/patterns/organisms/form/form-address-change'
import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderSlideIn from 'js/patterns/organisms/base/header-slide-in'

const TemplatesMyAddressChange = ({ products }) => {
    return (
        <div className='o-television'>
            <OrganismsHeaderSlideIn setIsOpen={() => {}} title='Adresse ändern' className='o-television__bar' />
            <div className='o-television__display'>
                <OrganismFormAddressChange />
            </div>
            <div className='o-television__remote-control'>
              <MoleculesButton type='primary' size='boss'>Speichern</MoleculesButton>
            </div>

            
        </div>
    )
}

TemplatesMyAddressChange.propTypes = {
    products: PropTypes.array.isRequired,
}

export default TemplatesMyAddressChange
