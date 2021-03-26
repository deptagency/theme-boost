import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import SelectVariant from '../../../atoms/select/SelectVariant'

const SizeSelector = ({ variants, onChange }) => {
    return (
        <div className='flex-col md:pb-6'>
            <div className='pb-2'>
                <FormattedMessage id='sizeProduct' />:
            </div>
            <div className='w-full mb-6 md:mb-0'>
                <SelectVariant
                    values={variants}
                    variant='form-select'
                    formatLabel={(option) => {
                        return option.attributes.size?.label || option.attributes.size
                    }}
                    onSelect={onChange}
                />
            </div>
        </div>
    )
}

SizeSelector.propTypes = {
    variants: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default SizeSelector
