import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

import Button from '../../atoms/buttons/button'
import HeaderMobile from '../../organisms/base/header-mobile'
import Footer from '../../organisms/base/foot'
import { ReactComponent as EmptyCartIcon } from '../../../../icons/empty-cart.svg'

const EmptyCart = () => {
    return (
        <Fragment>
            <HeaderMobile />
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
            <div className='o-prevent-space'>
                <Footer />
            </div>
        </Fragment>
    )
}

EmptyCart.propTypes = {

}

export default EmptyCart
