import React from 'react'

import Image from '@frontastic/catwalk/src/js/image'
import MediaImage from '@frontastic/catwalk/src/js/mediaImage'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

function IconList({ data }) {
    console.log('list', data)
    if (!data.listItems) return null
    return (
        <div>
            <ul className='flex'>
                {data.listItems.map(({ icon, label }) => (
                    <li className='flex items-center mr-8'>
                        <MediaImage media={icon} className='w-4 mr-4' />
                        <span>{label}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default tastify({ translate: true })(IconList)
