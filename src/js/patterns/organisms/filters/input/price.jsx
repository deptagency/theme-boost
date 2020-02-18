import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Label from '../../../atoms/forms/label'
import FromTo from '../../form/from-to'
import { marginTop24 } from '../filters.module.scss'

const PriceInput = ({ selectedPrice, setSelectedPrice }) => {
    return (
        <>
            <div className={marginTop24} />
            <Label
                className='c-title-level-4'
                label={<FormattedMessage id={'filters.price'} />}
            />

            <FromTo
                className='o-distance-s'
                value={selectedPrice}
                onChange={setSelectedPrice}
            />
        </>
    )
}

PriceInput.propTypes = {
    selectedPrice: PropTypes.object.isRequired,
    setSelectedPrice: PropTypes.func.isRequired,

}

export default PriceInput
