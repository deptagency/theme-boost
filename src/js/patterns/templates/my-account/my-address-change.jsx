import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import FormAddressChange from '../../organisms/form/address-change'
import Button from '../../atoms/buttons/button'
import HeaderSlideIn from '../../organisms/base/header-slide-in'

const MyAddressChange = ({ products }) => {
    return (
        <div className='o-television'>
            <HeaderSlideIn title='Adresse ändern' className='o-television__bar' />
            <div className='o-television__display'>
                <div className='o-container-small'>
                    <FormAddressChange />
                </div>
            </div>
            <div className='o-television__remote-control'>
                <div className='o-container-small'>
                    <Button type='primary' size='boss'>
                        <FormattedMessage id='account.save' />
                    </Button>
                </div>
            </div>

        </div>
    )
}

MyAddressChange.propTypes = {
    products: PropTypes.array.isRequired,
}

export default MyAddressChange
