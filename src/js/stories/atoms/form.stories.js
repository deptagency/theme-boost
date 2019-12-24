import React from 'react'

import Form from 'js/patterns/atoms/forms/form'
import Label from 'js/patterns/atoms/forms/form-label'
import Input from 'js/patterns/atoms/forms/form-input'
import Textarea from 'js/patterns/atoms/forms/form-textarea'
import Checkbox from 'js/patterns/atoms/forms/form-checkbox'
import Radiobutton from 'js/patterns/atoms/forms/form-radiobutton'
import Selectbox from 'js/patterns/atoms/forms/form-select'

export default {
    title: '2.Atoms|Form',
}

export const overview = () => {
    return <Form />
}
overview.story = {
    name: 'Overview',
}

export const label = () => {
    return <Label />
}
label.story = {
    name: 'Label',
}

export const textarea = () => {
    return <Textarea />
}
textarea.story = {
    name: 'Textarea',
}

export const input = () => {
    return <Input />
}
input.story = {
    name: 'Input',
}

export const checkbox = () => {
    return <Checkbox />
}
checkbox.story = {
    name: 'Checkbox',
}

export const radiobutton = () => {
    return <Radiobutton />
}
radiobutton.story = {
    name: 'Radiobutton',
}

export const selectbox = () => {
    return <Selectbox options={[
        { key: 'v1', value: 'Value A' },
        { key: 'v2', value: 'Value B' },
        { key: 'v3', value: 'Value C' },
        { key: 'v4', value: 'Value D' }
    ]} />
}
selectbox.story = {
    name: 'Selectbox',
}
