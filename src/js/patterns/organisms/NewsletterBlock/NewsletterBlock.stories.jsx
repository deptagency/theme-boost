import React from 'react'

import NewsletterBlock from './NewsletterBlock'

export default {
    title: 'Newsletter',
}

export const block = () => {
    return (
        <div>
            <NewsletterBlock />
        </div>
    )
}

block.story = {
    name: 'Newsletter',
}
