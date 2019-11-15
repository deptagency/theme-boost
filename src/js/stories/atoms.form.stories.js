import React from 'react'

import AtomsFormLabel from 'js/patterns/atoms/forms/form-label'
import AtomsFormInput from 'js/patterns/atoms/forms/form-input'
import AtomsFormTextarea from 'js/patterns/atoms/forms/form-textarea'
import AtomsFormElements from 'js/patterns/atoms/forms/form'

export default {
    title: '2.Atoms|Form',
}

export const collection = () => {
    return <AtomsFormElements />
}

collection.story = {
    name: 'Collection',
}

export const label = () => {
    return <AtomsFormLabel />
}

label.story = {
    name: 'Label',
}

export const textarea = () => {
    return <AtomsFormTextarea />
}

textarea.story = {
    name: 'Textarea',
}

export const input = () => {
    return <AtomsFormInput />
}

input.story = {
    name: 'Input',
}
