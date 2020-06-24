import React from 'react'
import './style.scss'

const DefaultLoader = () => {
    return (
        <div className='grid absolute inset-0 bg-transparent-50'>
            <div className='loading-full-screen flex self-center justify-center' />
        </div>
    )
}

export default DefaultLoader
