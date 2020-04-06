import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Select from 'Atoms/select'

const ColorSelector = ({ variants, setSelectedVariantIndex }) => {
    return (
        <div className='flex-col pt-4 md:pb-4'>
            <div className='pb-2'>
                <FormattedMessage id='product.color' />:
            </div>
            <div className='w-full mb-6 md:mb-0'>
                <div className='relative'>
                    <Select
                        values={variants}
                        formatLabel={(option) => { return option.attributes.color.label }}
                        onSelect={(i) => { return setSelectedVariantIndex(i) }}
                    />
                </div>
            </div>
        </div>
    )
}

ColorSelector.propTypes = {
    variants: PropTypes.array.isRequired,
    setSelectedVariantIndex: PropTypes.func.isRequired,
}

export default ColorSelector
