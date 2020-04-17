import React from 'react'

import Markdown from '../markdown/tastic'
import data from './stories/data'

export default {
    title: 'Markdown',
}

export const markdown = () => {
    return (
        <div>
            <Markdown
                data={data}
            />
        </div>
    )
}
