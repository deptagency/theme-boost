import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import SelectVariant from 'Atoms/select/SelectVariant'

const ColorSelector = ({ variants, onChange }) => {
    return (
        <div className='flex-col pt-4 md:pb-4'>
            <div className='pb-2'>
                <FormattedMessage id='product.color' />:
            </div>
            <div className='w-full mb-6 md:mb-0'>
                <SelectVariant
                    values={variants}
                    variant='form-select'
                    formatLabel={(option) => { return option.attributes.color ? option.attributes.color.label : '' }}
                    onSelect={(i) => { return onChange(i) }}
                />
            </div>
        </div>
    )
}

ColorSelector.propTypes = {
    variants: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default ColorSelector
