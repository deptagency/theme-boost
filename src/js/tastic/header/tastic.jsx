import React from 'react'
import PropTypes from 'prop-types'

import ReferencePropType from 'frontastic-catwalk/src/js/component/reference'

import Header from '../../patterns/organisms/base/header'

function HeaderTastic ({ data }) {
    return <Header topCategories={data.topCategories} />
}

HeaderTastic.propTypes = {
    data: PropTypes.shape({
        topCategories: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                reference: ReferencePropType,
            })
        ),
    }),
}

HeaderTastic.defaultProps = {}

export default HeaderTastic
