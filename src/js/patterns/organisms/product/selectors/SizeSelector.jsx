import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import VariantSelect from 'Atoms/select/VariantSelect'

const SizeSelector = ({ variants, setSelectedVariantIndex }) => {
    return (
        <div className='flex-col md:pb-6'>
            <div className='pb-2'>
                <FormattedMessage id='sizeProduct' />:
            </div>
            <VariantSelect
                values={variants}
                formatLabel={(option) => { return option.attributes.size }}
                onSelect={(i) => { return setSelectedVariantIndex(i) }}
            />
        </div>
    )
}

SizeSelector.propTypes = {
    variants: PropTypes.array.isRequired,
    setSelectedVariantIndex: PropTypes.func.isRequired,
}

export default SizeSelector
