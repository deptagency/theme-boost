import React from 'react'

export default {
    title: '5.Styleguide|Lists',
}

export const lists = () => {
    return (
        <div>
            <h3 className='o-distance'>List Inline</h3>
            <ul className='o-list-inline'>
                <li className='o-list-inline__item'>Item</li>
                <li className='o-list-inline__item'>Item</li>
                <li className='o-list-inline__item'>Item</li>
            </ul>
            <h3 className='o-distance'>List Bare</h3>
            <ul className='o-list-bare'>
                <li className='o-list-bare__item'>Item</li>
                <li className='o-list-bare__item'>Item</li>
                <li className='o-list-bare__item'>Item</li>
            </ul>
            <h3 className='o-distance'>List Divided</h3>
            <ul className='o-list-bare'>
                <li className='o-list-bare__item'>Item</li>
                <li className='o-list-bare__item' aria-hidden='true'><span className='c-divider' /></li>
                <li className='o-list-bare__item'>Item</li>
                <li className='o-list-bare__item' aria-hidden='true'><span className='c-divider' /></li>
                <li className='o-list-bare__item'>Item</li>
                <li className='o-list-bare__item' aria-hidden='true'><span className='c-divider' /></li>
            </ul>
        </div>
    )
}

lists.story = {
    name: 'Lists',
}
