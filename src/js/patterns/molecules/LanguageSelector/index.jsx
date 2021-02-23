import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import app from '@frontastic/catwalk/src/js/app/app'

const LanguageSelector = ({ context, className }) => {
    return (
        <>
            <select
                className={`${className} uppercase`}
                value={context.locale}
                onChange={(event) => {
                    app.getLoader('context').refresh(
                        Object.assign({}, context.toParameters(), {
                            locale: event.target.value,
                        })
                    )
                }}
                >
                {context.project.languages.map((language) => {
                    return (
                        <option value={language} key={language}>
                            {language.substring(0, 2)}
                        </option>
                    )
                })}
            </select>
        </>
    )
}

LanguageSelector.propTypes = {
    context: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default connect(
    (globalState, props) => {
        return {
            context: globalState.app.context,
        }
    }
)(LanguageSelector)
