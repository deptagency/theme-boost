import React from 'react'

import Select from 'Atoms/select'
import SelectVariant from 'Atoms/select/SelectVariant'

export default {
    title: 'Form',
}

function selectLabel (option) {
    return `Custom label ${option}`
}

export const select = () => {
    const values = [1, 2, 3, 4, 5]
    const variantValues = [1, 1, 1, 2, 2, 3]

    return (
        <>
            <div className='p-2'>
                <Select
                    value='2'
                    values={values}
                    variant='form-select'
                    onSelect={(i) => {}}
                />
            </div>

            <div className='p-2'>
                <Select
                    value='1'
                    values={values}
                    variant='form-select'
                    formatLabel={(option) => { return selectLabel(option) }}
                    onSelect={(i) => {}}
                />
            </div>

            <div className='p-2'>
                <SelectVariant
                    value='3'
                    values={variantValues}
                    variant='form-select'
                    onSelect={(i) => {}}
                />
            </div>
        </>
    )
}
