import React from 'react'

import Image from '@frontastic/catwalk/src/js/image'
import MediaImage from '@frontastic/catwalk/src/js/mediaImage'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

interface Props {
    data: { listItems: [{ label: string; icon: string }] }
}

function IconList({ data }: Props) {
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
