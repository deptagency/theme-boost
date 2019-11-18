import React from 'react'

import Chip from 'js/patterns/atoms/chips/chip'

export default {
    title: '2.Atoms|Chips',
}

export const Deleteable = () => {
    return (
        <Chip deleteable='true' />
    )
}
export const ActiveDeleteable = () => {
    return (
        <Chip active='true' deleteable='true' />
    )
}
export const SelectedDeleteable = () => {
    return (
        <Chip selected='true' deleteable='true' />
    )
}
export const Default = () => {
    return (
        <Chip component='button' />
    )
}
export const Active = () => {
    return (
        <Chip component='button' active='true' />
    )
}
