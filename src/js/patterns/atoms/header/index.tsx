import React from 'react'

export default function Header({ title, className = '' }) {
    return <h2 className={`text-2xl text-gray-900 font-bold antialiased ${className}`}>{title}</h2>
}
