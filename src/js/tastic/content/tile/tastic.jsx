import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tile from 'Molecules/Tile'
import getTranslation from "@frontastic/catwalk/src/js/getTranslation";

const TileTastic = ({ data, tastic, context }) => {
    return (
        <Tile
            {/*{... data}*/}
            image={data.image}
            {/* ... */}
            caption={getTranslation(
                tastic.schema.get('caption'),
                context.locale,
                context.project.defaultLanguage
            ).text}
        />
    )
}

TileTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
    context: PropTypes.object.isRequired,
}

export default connect(
    (globalState, props) => {
        return {
            ...props,
            context: globalState.app.context,
        }
    }
)(TileTastic)
