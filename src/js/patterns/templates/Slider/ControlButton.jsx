import React from 'react'

export default function ControlButton({ onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={`bg-white w-8 h-10 flex items-center justify-center rounded-r-lg ${className}`}
        >
            <svg width='18' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M3.508 6.167H16.5a.833.833 0 010 1.666H3.508l4.417 4.417a.834.834 0 11-1.183 1.167L.908 7.583a.833.833 0 010-1.166L6.742.583A.833.833 0 017.925 1.75L3.508 6.167z'
                    fill='#1A202C'
                />
            </svg>
        </button>
    )
}
