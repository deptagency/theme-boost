import React from 'react'

export default {
    title: '5.Styleguide|Themes',
}

export const spotlight = () => {
    return (
        <div className='t-spotlight'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nesciunt molestiae officiis asperiores amet eveniet voluptates voluptate libero vero dignissimos maxime, ad, soluta optio cum recusandae nam corporis dolores ut.</p>
        </div>
    )
}

spotlight.story = {
    name: 'Spotlight',
}

export const quietlight = () => {
    return (
        <div>
            <div className='t-quietlight'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nesciunt molestiae officiis asperiores amet eveniet voluptates voluptate libero vero dignissimos maxime, ad, soluta optio cum recusandae nam corporis dolores ut.</p>
            </div>
        </div>
    )
}

quietlight.story = {
    name: 'Quietlight',
}

export const text = () => {
    return (
        <div>
            <p className='t-text-quiet'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quibusdam dignissimos. Fugit commodi earum mollitia iste illum repellendus, explicabo, odio recusandae, est rem dolorem consequuntur saepe reprehenderit ad perferendis dolorum.</p>
            <p className='t-text-ghost'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quibusdam dignissimos. Fugit commodi earum mollitia iste illum repellendus, explicabo, odio recusandae, est rem dolorem consequuntur saepe reprehenderit ad perferendis dolorum.</p>
            <p className='t-text-danger'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quibusdam dignissimos. Fugit commodi earum mollitia iste illum repellendus, explicabo, odio recusandae, est rem dolorem consequuntur saepe reprehenderit ad perferendis dolorum.</p>
        </div>
    )
}

text.story = {
    name: 'Text',
}
