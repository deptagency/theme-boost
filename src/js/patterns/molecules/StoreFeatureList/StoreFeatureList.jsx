import React from 'react'

import StoreFeature from '../../atoms/StoreFeature'

import Translatable from 'frontastic-catwalk/src/js/component/translatable'

import { ReactComponent as IconTruck } from '../../../../icons/truck.svg'
import { ReactComponent as IconBill } from '../../../../icons/bill.svg'
import { ReactComponent as IconPackage } from '../../../../icons/package.svg'

export function StoreFeatureList({ features }) {
    return (
        <div className='c-store-feature__list'>
            {features.map((feature) => {
                return (
                    <StoreFeature icon={feature.icon}>
                        <Translatable value={feature.text} />
                    </StoreFeature>
                )
            })}
        </div>
    )
}

StoreFeatureList.propTypes = {}

StoreFeatureList.defaultProps = {}
