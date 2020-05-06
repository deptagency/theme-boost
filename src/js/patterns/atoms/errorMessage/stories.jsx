import React from 'react'

import ErrorMessage from 'Atoms/errorMessage'

export default {
    title: 'Form',
}

export const errorMessage = () => {
    const errors = {
        name: {
            message: 'This field is required'
        }
    }

    return (
        <div className='p-4'>
            <ErrorMessage errors={errors} name='name' />
        </div>
    )
}
