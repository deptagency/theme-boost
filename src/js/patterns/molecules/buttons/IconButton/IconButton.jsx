import React from 'react'

export function IconButton({ icon, onClick, className, children }) {
    return (
        <button onClick={onClick} className={`${className ? `${className} ` : ''}c-icon-button`}>
            {icon && icon}
            {children && <span className='c-icon-button__label'>{children}</span>}
        </button>
    )
}
