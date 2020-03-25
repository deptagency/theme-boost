import React from 'react'

import NewsletterBlock from 'Organisms/NewsletterBlock'

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
