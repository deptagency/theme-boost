import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Button from '../../atoms/buttons/button'
import OrganismsHeaderSlideIn from '../../organisms/base/header-slide-in'
import OrganismsFormEmailChange from '../../organisms/form/form-email-change'

const TemplatesMyEmailChange = ({ products }) => {
    return (
        <div className='o-television'>
            <OrganismsHeaderSlideIn setIsOpen={() => {}} title='E-Mail-Adresse ändern' className='o-television__bar' />
            <div className='o-television__display'>
                <div className='o-container-small'>
                    <p className='u-text-s'>
                        <FormattedMessage id='account.eMailChange.text'/>
                    </p>
                    <div className='o-distance'>
                        <dt className='u-text-s t-text-quiet'>
                            <FormattedMessage id='account.eMailChange.current'/>
                        </dt>
                        <dd className='u-text-s u-text-strong'>
                            <FormattedMessage id='account.eMailChange.example'/>
                        </dd>
                    </div>
                    <div className='o-distance'>
                        <OrganismsFormEmailChange />
                        <Button type='primary' size='boss' className='o-distance-m'>
                            <FormattedMessage id='account.save'/>
                        </Button>
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
