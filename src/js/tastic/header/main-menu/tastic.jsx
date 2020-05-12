import React from 'react'
import PropTypes from 'prop-types'

import ReferencePropType from '@frontastic/catwalk/src/js/component/reference'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import MainMenu from 'Organisms/MainMenu'

const MainMenuTastic = ({ data }) => {
    console.log('MENU DATA', data)
    return (
        <MainMenu
            topCategories={data.topCategories}
            logo={data.logo}
        />
    )
}

MainMenuTastic.propTypes = {
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
}

export default tastify()(MainMenuTastic)
