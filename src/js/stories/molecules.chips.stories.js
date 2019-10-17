import React from 'react'

import MoleculesChip from 'js/patterns/molecules/chips/chip'

export default {
    title: '2.Molecules|Chips',
}

export const Deleteable = () => {
    return (
        <MoleculesChip deleteable='true' />
    )
}
export const ActiveDeleteable = () => {
    return (
        <MoleculesChip active='true' deleteable='true' />
    )
}
export const SelectedDeleteable = () => {
    return (
        <MoleculesChip selected='true' deleteable='true' />
    )
}
export const Default = () => {
    return (
        <MoleculesChip component='button' />
    )
}
export const Active = () => {
    return (
        <MoleculesChip component='button' active='true' />
    )
}
