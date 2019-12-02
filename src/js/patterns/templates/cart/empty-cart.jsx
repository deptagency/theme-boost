import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

import Button from '../../atoms/buttons/button'
import OrganismsHeaderMobile from '../../organisms/base/header-mobile'
import OrganismsFooter from '../../organisms/base/foot'
import { ReactComponent as EmptyCartIcon } from '../../../../icons/empty-cart.svg'

const TemplatesEmptyCart = () => {
    return (
        <Fragment>
            <OrganismsHeaderMobile />
            <section className='o-container-small o-distance o-prevent-space'>
                <div className='u-text-center'>
                    <EmptyCartIcon className='c-icon c-icon--xl t-text-quiet' />
                </div>
                <div className='o-distance-m'>
                    <p className='u-text-center'><FormattedMessage id='cart.emptyCart'/></p>
                    <Button size='boss' type='primary' className='o-distance-s'>
                        <FormattedMessage id='cart.registerNow'/>
                    </Button>
                </div>
            </section>
            <div className='o-prevent-space'>
                <OrganismsFooter />
            </div>
        </Fragment>
    )
}

TemplatesEmptyCart.propTypes = {

}

export default TemplatesEmptyCart
