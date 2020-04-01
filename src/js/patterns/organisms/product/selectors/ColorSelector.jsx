import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import VariantSelect from 'Atoms/select/VariantSelect'

const ColorSelector = ({ variants, setSelectedVariantIndex }) => {
    return (
        <div className='flex-col pt-4 md:pb-4'>
            <div className='pb-2'>
                <FormattedMessage id='product.color' />:
            </div>
            <VariantSelect
                values={variants}
                formatLabel={(option) => { return option.attributes.color.label }}
                onSelect={(i) => { return setSelectedVariantIndex(i) }}
            />
        </div>
    )
}

ColorSelector.propTypes = {
    variants: PropTypes.array.isRequired,
    setSelectedVariantIndex: PropTypes.func.isRequired,
}

export default ColorSelector
