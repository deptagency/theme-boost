import React, {Fragment} from 'react'

import Button from '../../atoms/buttons/button'
import { ReactComponent as EmptyCartIcon } from '../../../../icons/empty-cart.svg'
import OrganismsHeaderMobile from '../../organisms/base/header-mobile'
import OrganismsFooter from '../../organisms/base/foot'

const TemplatesEmptyCart = () => {
    return (
        <Fragment>
            <OrganismsHeaderMobile />
            <section className='o-container-small o-distance o-prevent-space'>
                <div className='u-text-center'>
                    <EmptyCartIcon className='c-icon c-icon--xl t-text-quiet' />
                </div>
                <div className='o-distance-m'>
                    <p className='u-text-center'>Der Warenkorb ist noch leer.</p>
                    <Button size='boss' type='primary' className='o-distance-s'>Jetzt anmelden</Button>
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
