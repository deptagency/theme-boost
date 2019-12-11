import React from 'react'
import PropTypes from 'prop-types'

import StoreFeature from '../../atoms/StoreFeature'
import Translatable from 'frontastic-catwalk/src/js/component/translatable'

export function StoreFeatureList ({ features }) {
    return (
        <div className='c-store-feature__list'>
            {features.map((feature, i) => {
                return (
                    <StoreFeature key={i} icon={feature.icon}>
                        <Translatable value={feature.text} />
                    </StoreFeature>
                )
            })}
        </div>
    )
}

StoreFeatureList.propTypes = {
    features: PropTypes.array,
}

StoreFeatureList.defaultProps = {
    features: [],
}
