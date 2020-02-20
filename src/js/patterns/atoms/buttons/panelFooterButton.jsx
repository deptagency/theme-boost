import React from 'react'
import PropTypes from 'prop-types'
import { margin10 } from '../../organisms/filters/filters.module.scss'
import BackButton from './backButton'
import SaveButton from './saveButton'
import BUTTON_STATE from './buttonState'

const PanelFooterButton = ({ state, onBackClick, onSaveClick }) => {
    return (
        <div className={margin10}>
            {state === BUTTON_STATE.BACK && <BackButton onClick={onBackClick} />}
            {state === BUTTON_STATE.SAVE && <SaveButton onClick={onSaveClick} />}
        </div>
    )
}

PanelFooterButton.propTypes = {
    state: PropTypes.string.isRequired,
    onBackClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
}

export default PanelFooterButton
