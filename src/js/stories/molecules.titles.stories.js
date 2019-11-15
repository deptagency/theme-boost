import React from 'react'

import MoleculesTitle from 'js/patterns/molecules/title/title'

export default {
    title: '3.Molecules|Titles',
}

export const all = () => {
    return (
        <div>
            <p className='c-title'>Title</p>
            <p className='c-title-level-1'>Title Level 1</p>
            <p className='c-title-level-2'>Title Level 2</p>
            <p className='c-title-level-3'>Title Level 3</p>
            <p className='c-title-level-4'>Title Level 4</p>
            <p className='c-category-title'>Category Title</p>
            <p className='c-topic'>Topic</p>
            <MoleculesTitle />
        </div>
    )
}

all.story = {
    name: 'All',
}
