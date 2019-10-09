import React from 'react'

import AtomsParagraph from 'js/patterns/atoms/text/paragraph'
import AtomsHeadline from 'js/patterns/atoms/text/headlines'
import AtomsBlockquote from 'js/patterns/atoms/text/blockquote'

export default {
    title: '1.Atoms|Text',
}

export const paragraph = () => {
    return <AtomsParagraph />
}

paragraph.story = {
    name: 'Paragraph',
}

export const blockquote = () => {
    return <AtomsBlockquote />
}

blockquote.story = {
    name: 'Blockquote',
}

export const htmlHeadlines = () => {
    return <AtomsHeadline />
}

htmlHeadlines.story = {
    name: 'HTML Headlines',
}
