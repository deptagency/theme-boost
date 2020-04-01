import React, { Component } from 'react'
import './_container.scss'

export default function Container({ children }) {
    return (
        <div role='main' className='main' id='story-container'>
            {children}
        </div>
    )
}
