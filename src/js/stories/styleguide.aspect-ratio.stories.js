import React from 'react'

export default {
    title: '5.Styleguide|Aspect Ratios',
    decorators: [storyFn => { return <div style={{ border: '3px solid #666' }}>{storyFn()}</div> }],
}

export const aspect16X9 = () => {
    return (
        <div>
            <div className='u-aspect-ratio-16x9'>16x9</div>
        </div>
    )
}

aspect16X9.story = {
    name: '16x9',
}

export const aspect21X9 = () => {
    return (
        <div>
            <div className='u-aspect-ratio-21x9'>21x9</div>
        </div>
    )
}

aspect21X9.story = {
    name: '21x9',
}

export const aspect4X3 = () => {
    return (
        <div>
            <div className='u-aspect-ratio-4x3'>4x3</div>
        </div>
    )
}

aspect4X3.story = {
    name: '4x3',
}

export const aspect1X1 = () => {
    return (
        <div>
            <div className='u-aspect-ratio-1x1'>1x1</div>
        </div>
    )
}

aspect1X1.story = {
    name: '1x1',
}
