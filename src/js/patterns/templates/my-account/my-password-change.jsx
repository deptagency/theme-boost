import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Button from 'js/patterns/atoms/buttons/button'
import HeaderSlideIn from 'js/patterns/organisms/base/header-slide-in'
import FormPasswordChange from 'js/patterns/organisms/form/password-change'

const MyPasswordChange = ({ products }) => {
    return (
        <div className='o-television'>
            <HeaderSlideIn title={<FormattedMessage id='account.password.title' />} className='o-television__bar' />
            <div className='o-television__display'>
                <div className='o-container-small'>
                    <p className='u-text-s '>
                        <FormattedMessage id='account.password.change' />
                    </p>
                    <div className='o-distance'>
                        <FormPasswordChange />
                        <Button type='primary' size='boss' className='o-distance-m'>
                            <FormattedMessage id='account.save' />
                        </Button>
                    </div>
                </div>
            </div>
            <div className='o-television__remote-control' />
        </div>
    )
}

MyPasswordChange.propTypes = {
    products: PropTypes.array.isRequired,
}

export default MyPasswordChange
