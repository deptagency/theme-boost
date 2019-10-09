import React from 'react'

export default {
    title: '2.Molecules|Chips',
}

export const all = () => {
    return (
        <div>
            <h3>Chip Default</h3>
            <div className='c-chip'>
                <span>Blau</span>
                <button className='c-chip__trigger'>
                    <svg
                        className='c-icon c-icon--s'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                    >
                        <title>cross</title>
                        <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                    </svg>
                </button>
            </div>
            <h3 className='o-distance'>Chip Selected</h3>
            <div className='c-chip c-chip--selected'>
                <span>Blau</span>
                <button className='c-chip__trigger'>
                    <svg
                        className='c-icon c-icon--s'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                    >
                        <title>cross</title>
                        <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                    </svg>
                </button>
            </div>
            <h3 className='o-distance'>Chip Active</h3>
            <div className='c-chip is-active'>
                <span>Blau</span>
                <button className='c-chip__trigger'>
                    <svg
                        className='c-icon c-icon--s'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                    >
                        <title>cross</title>
                        <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                    </svg>
                </button>
            </div>
            <h3 className='o-distance'>Chip to choose</h3>
            <button className='c-chip'>Blau</button>
            <h3 className='o-distance'>Active Chip to choose</h3>
            <button className='c-chip is-active'>Blau</button>
        </div>
    )
}

all.story = {
    name: 'All',
}
