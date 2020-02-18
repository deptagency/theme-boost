import React from 'react'
import PropTypes from 'prop-types'
import { sustainabilityFilterDesktop } from '../filters.module.scss'
import { FormattedMessage } from 'react-intl'
import Checkbox from '../../../atoms/forms/checkbox'

const SustainabilityDropdown = ({ checkedSustainability, setCheckedSustainability }) => {
    return (
        <div className={sustainabilityFilterDesktop}>
            <FormattedMessage id={'filters.sustainability'} />
            <Checkbox
                checked={checkedSustainability}
                onChange={setCheckedSustainability}
            />
        </div>
    )
}

SustainabilityDropdown.propTypes = {
    checkedSustainability: PropTypes.bool.isRequired,
    setCheckedSustainability: PropTypes.func.isRequired,
}

export default SustainabilityDropdown
