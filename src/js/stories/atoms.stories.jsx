import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import AtomsParagraph from 'js/patterns/catwalk-frontend/atoms/text/paragraph'
import AtomsHeadline from 'js/patterns/catwalk-frontend/atoms/text/headlines'
import AtomsBlockquote from 'js/patterns/catwalk-frontend/atoms/text/blockquote'
import AtomsFormLabel from 'js/patterns/catwalk-frontend/atoms/forms/form-label'
import AtomsFormInput from 'js/patterns/catwalk-frontend/atoms/forms/form-input'
import AtomsFormTextarea from 'js/patterns/catwalk-frontend/atoms/forms/form-textarea'
import AtomsFormElements from 'js/patterns/catwalk-frontend/atoms/forms/form'

storiesOf('1.Atoms|Text', module)
    .add('Paragraph', () => {
        return (
            <AtomsParagraph />
        )
    })
    .add('Blockquote', () => {
        return (
            <AtomsBlockquote />
        )
    })
    .add('HTML Headlines', () => {
        return (
            <AtomsHeadline />
        )
    })

storiesOf('1.Atoms|Form', module)
    .add('Collection', () => {
        return (
            <AtomsFormElements />
        )
    })
    .add('Label', () => {
        return (
            <AtomsFormLabel />
        )
    })
    .add('Textarea', () => {
        return (
            <AtomsFormTextarea />
        )
    })
    .add('Input', () => {
        return (
            <AtomsFormInput />
        )
    })
    .add('Input', () => {
        return (
            <AtomsFormInput />
        )
    })
