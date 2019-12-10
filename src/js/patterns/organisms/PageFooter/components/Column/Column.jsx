import React from 'react'

export function Column({ children, className = '', title = 'Title missing' }) {
    return (
        <div className={className}>
            <h2 className='u-text-m u-text-strong u-text-uppercase'>{title}</h2>
            <div className='o-distance-m'>{children}</div>
        </div>
    )
}
