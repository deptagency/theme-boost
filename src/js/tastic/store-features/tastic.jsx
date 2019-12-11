import React from 'react'
import PropTypes from 'prop-types'
import StoreFeatureList from '../../patterns/molecules/StoreFeatureList'

import { ReactComponent as TruckIcon } from '../../../icons/truck.svg'
import { ReactComponent as BillIcon } from '../../../icons/bill.svg'
import { ReactComponent as PackageIcon } from '../../../icons/package.svg'

// icon map - should mirror the options in the tastic schema
const featureIcons = { truck: <TruckIcon />, bill: <BillIcon />, box: <PackageIcon /> }

function iconsFromData (features) {
    return features.map((feature) => {
        return { ...feature, icon: featureIcons[feature.icon] }
    })
}

function StoreFeatures ({ data }) {
    if (!data.features) { return null }

    const features = iconsFromData(data.features)
    return <StoreFeatureList features={features} />
}

StoreFeatures.propTypes = {
    data: PropTypes.object.isRequired,
}

export default StoreFeatures
