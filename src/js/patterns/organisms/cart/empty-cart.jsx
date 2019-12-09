import React from 'react'

import Button from '../../atoms/buttons/button'
import { ReactComponent as EmptyCartIcon } from '../../../../icons/empty-cart.svg'
import { FormattedMessage } from 'react-intl'

const OrganismsEmptyCart = () => {
    return (
        <section className='o-container-small o-distance o-prevent-space'>
            <div className='u-text-center'>
                <EmptyCartIcon className='c-icon c-icon--xl t-text-quiet' />
            </div>
            <div className='o-distance-m'>
                <p className='u-text-center'><FormattedMessage id='cart.emptyCart' /></p>
                <Button size='boss' type='primary' className='o-distance-s'>
                    <FormattedMessage id='cart.registerNow' />
                </Button>
            </div>
        </section>
    )
}

OrganismsEmptyCart.propTypes = {

}

export default OrganismsEmptyCart
