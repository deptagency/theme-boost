import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import MainMenu from 'Organisms/MainMenu'

const MainMenuTastic = ({ data }) => {
    return (
        <MainMenu
            topCategories={data.topCategories}
            logo={data.logo}
            infoHeader={data.infoHeader}
            infoHeaderIcon={data.infoHeaderIcon}
            aboutHeader={data.aboutHeader}
            aboutHeaderIcon={data.aboutHeaderIcon}
            contacHeader={data.contacHeader}
            contactHeaderIcon={data.contactHeaderIcon}
        />
    )
}

MainMenuTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default tastify()(MainMenuTastic)
