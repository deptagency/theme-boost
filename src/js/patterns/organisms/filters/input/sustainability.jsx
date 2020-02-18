import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Checkbox from '../../../atoms/forms/checkbox'
import { sustainabilityFilter } from '../filters.module.scss'

const SustainabilityInput = ({ checkedSustainability, setCheckedSustainability }) => {
    return (
        <div className={sustainabilityFilter}>
            <FormattedMessage id={'filters.sustainability'} />
            <Checkbox
                checked={checkedSustainability}
                onChange={setCheckedSustainability}
            />
        </div>
    )
}

SustainabilityInput.propTypes = {
    checkedSustainability: PropTypes.bool.isRequired,
    setCheckedSustainability: PropTypes.func.isRequired,
}

export default SustainabilityInput
