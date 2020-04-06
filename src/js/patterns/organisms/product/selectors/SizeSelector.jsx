import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Select from 'Atoms/select'

const SizeSelector = ({ variants, setSelectedVariantIndex }) => {
    return (
        <div className='flex-col md:pb-6'>
            <div className='pb-2'>
                <FormattedMessage id='sizeProduct' />:
            </div>
            <div className='w-full mb-6 md:mb-0'>
                <div className='relative'>
                    <Select
                        values={variants}
                        formatLabel={(option) => { return option.attributes.size }}
                        onSelect={(i) => { return setSelectedVariantIndex(i) }}
                    />
                </div>
            </div>
        </div>
    )
}

SizeSelector.propTypes = {
    variants: PropTypes.array.isRequired,
    setSelectedVariantIndex: PropTypes.func.isRequired,
}

export default SizeSelector
