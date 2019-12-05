import React from 'react'

import StoreFeature from '../../atoms/StoreFeature'

import Translatable from 'frontastic-catwalk/src/js/component/translatable'

import { ReactComponent as IconTruck } from '../../../../icons/truck.svg'
import { ReactComponent as IconBill } from '../../../../icons/bill.svg'
import { ReactComponent as IconPackage } from '../../../../icons/package.svg'

export function StoreFeatureList() {
    return (
        <div className='c-store-feature__list'>
            <StoreFeature icon={<IconTruck />}>
                <Translatable value={'Lieferung in 24 Stunden'} />
            </StoreFeature>
            <StoreFeature icon={<IconBill />}>
                <Translatable value={'Kauf auf Rechnung'} />
            </StoreFeature>
            <StoreFeature icon={<IconPackage />}>
                <Translatable value={'Kostenloser Versand & Rückversand'} />
            </StoreFeature>
        </div>
    )
}

StoreFeatureList.propTypes = {}

StoreFeatureList.defaultProps = {}
