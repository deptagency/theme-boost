import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ReferencePropType from 'frontastic-catwalk/src/js/component/reference'

import Header from '../../patterns/organisms/base/header'

function HeaderTastic ({ data, context }) {
    return (
        <Header
            topCategories={data.topCategories}
            loggedIn={context.session.loggedIn}
        />
    )
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
    context: PropTypes.object.isRequired,
}

HeaderTastic.defaultProps = {}

export default connect(
    (globalState, props) => {
        return {
            ...props,
            context: globalState.app.context,
        }
    }
)(HeaderTastic)
