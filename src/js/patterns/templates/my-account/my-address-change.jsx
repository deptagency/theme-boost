import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import OrganismFormAddressChange from '../../organisms/form/form-address-change'
import Button from '../../atoms/buttons/button'
import OrganismsHeaderSlideIn from '../../organisms/base/header-slide-in'

const TemplatesMyAddressChange = ({ products }) => {
    return (
        <div className='o-television'>
            <OrganismsHeaderSlideIn title='Adresse ändern' className='o-television__bar' />
            <div className='o-television__display'>
                <div className='o-container-small'>
                    <OrganismFormAddressChange />
                </div>
            </div>
            <div className='o-television__remote-control'>
                <div className='o-container-small'>
                    <Button type='primary' size='boss'>
                        <FormattedMessage id='account.save'/>
                    </Button>
                </div>
            </div>

        </div>
    )
}

TemplatesMyAddressChange.propTypes = {
    products: PropTypes.array.isRequired,
}

export default TemplatesMyAddressChange
