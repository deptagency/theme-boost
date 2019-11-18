import React from 'react'

import Referal from 'js/patterns/atoms/links/referal'
import ReferalOneLiner from 'js/patterns/atoms/links/referal-one-liner'
import ReferalBordered from 'js/patterns/atoms/links/referal-bordered'

export default {
    title: '2.Atoms|Links',
}

export const links = () => {
    return (
        <div>
            <p className='c-link'>Link</p>
            <p className='c-link c-link--ghost'>Link</p>
            <p className='c-link c-link--uniform'>Link</p>
        </div>
    )
}

links.story = {
    name: 'Links',
}

export const referal = () => {
    return <Referal />
}

referal.story = {
    name: 'Referal',
}

export const referalOneLiner = () => {
    return <ReferalOneLiner />
}

referalOneLiner.story = {
    name: 'Referal One Liner',
}

export const referalBordered = () => {
    return <ReferalBordered />
}

referalBordered.story = {
    name: 'Referal Bordered',
}
