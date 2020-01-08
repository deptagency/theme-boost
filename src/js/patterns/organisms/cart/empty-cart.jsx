import React from 'react'

import Button from '../../atoms/buttons/button'
import { ReactComponent as EmptyCartIcon } from '../../../../icons/empty-cart.svg'
import { FormattedMessage } from 'react-intl'

const OrganismsEmptyCart = () => {
    return (
        <div className='c-box u-background-color-default'>
            <div className='o-container-small'>
                <div className='u-text-center'>
                    <EmptyCartIcon className='c-icon c-icon--xxl u-text-color-300' />
                </div>
                <div className='o-distance-m u-text-center'>
                    <h2 className='c-title-area'><FormattedMessage id='cart.emptyCart.title' /></h2>
                    <p><FormattedMessage id='cart.emptyCart.text' /></p>
                    <Button size='boss' type='primary' className='o-distance-m'>
                        <FormattedMessage id='cart.registerNow' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

OrganismsEmptyCart.propTypes = {

}

export default OrganismsEmptyCart
