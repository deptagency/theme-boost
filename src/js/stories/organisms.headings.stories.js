import React from 'react'

export default {
    title: '4.Organisms|Headings',
}

export const defaultStory = () => {
    return (
        <div className='o-heading'>
            <p className='c-topic'>Longer Topic</p>
            <h2 className='c-title'>Title for Storefront</h2>
            <p className='c-lead'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis accusamus quam velit illum aliquid quae officiis pariatur possimus nulla, harum aperiam voluptatibus? Quia autem enim porro atque ratione omnis.</p>
            <p className='o-distance-m'><a href='' title='' className='c-link'>Link</a></p>
        </div>
    )
}

defaultStory.story = {
    name: 'default',
}
