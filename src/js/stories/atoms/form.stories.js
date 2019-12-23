import React from 'react'

import FormLabel from 'js/patterns/atoms/forms/form-label'
import FormInput from 'js/patterns/atoms/forms/form-input'
import FormTextarea from 'js/patterns/atoms/forms/form-textarea'
import FormElements from 'js/patterns/atoms/forms/form'

export default {
    title: '2.Atoms|Form',
}

export const collection = () => {
    return <FormElements />
}

collection.story = {
    name: 'Collection',
}

export const label = () => {
    return <FormLabel />
}

label.story = {
    name: 'Label',
}

export const textarea = () => {
    return <FormTextarea />
}

textarea.story = {
    name: 'Textarea',
}

export const input = () => {
    return <FormInput />
}

input.story = {
    name: 'Input',
}
