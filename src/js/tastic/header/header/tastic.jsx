import React from 'react'
import PropTypes from 'prop-types'

import ReferencePropType from '@frontastic/catwalk/src/js/component/reference'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import Header from '../../../patterns/organisms/base/header'

const HeaderTastic = ({ data, context }) => {
    return <Header topCategories={data.topCategories} logo={data.logo} loggedIn={context.session.loggedIn} />
}

HeaderTastic.propTypes = {
    data: PropTypes.shape({
        topCategories: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                reference: () => {
                    return ReferencePropType
                },
            })
        ),
        logo: PropTypes.shape({
            media: PropTypes.object,
        }),
    }),
    context: PropTypes.object.isRequired,
}

HeaderTastic.defaultProps = {}

export default tastify({ connect: { context: true } })(HeaderTastic)
