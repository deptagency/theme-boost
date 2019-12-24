import React from 'react'

import Overview from 'js/patterns/atoms/forms/overview'
import Label from 'js/patterns/atoms/forms/label'
import Input from 'js/patterns/atoms/forms/input'
import Textarea from 'js/patterns/atoms/forms/textarea'
import Checkbox from 'js/patterns/atoms/forms/checkbox'
import Radiobutton from 'js/patterns/atoms/forms/radiobutton'
import Selectbox from 'js/patterns/atoms/forms/select'

export default {
    title: '2.Atoms|Form',
}

export const overview = () => {
    return <Overview />
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
