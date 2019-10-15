import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsFormCoupon extends Component {
    render () {
        return (<div>
            <form method=''>
                <fieldset>
                    <div className='o-form-area o-distance-m'>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='coupon-code' className='c-form-label'>Couponcode</label>
                            <input type='text' name='couponcode' id='coupon-code' className='o-distance-xs' />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>)
    }
}

OrganismsFormCoupon.propTypes = {
}

OrganismsFormCoupon.defaultProps = {
}

export default ComponentInjector.return('OrganismsFormCoupon', OrganismsFormCoupon)
