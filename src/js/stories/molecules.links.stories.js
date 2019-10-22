import React from 'react'

import MoleculesReferal from 'js/patterns/molecules/links/referal'
import MoleculesReferalOneLiner from 'js/patterns/molecules/links/referal-one-liner'
import MoleculesReferalBordered from 'js/patterns/molecules/links/referal-bordered'

export default {
    title: '2.Molecules|Links',
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
    return <MoleculesReferal />
}

referal.story = {
    name: 'Referal',
}

export const referalOneLiner = () => {
    return <MoleculesReferalOneLiner />
}

referalOneLiner.story = {
    name: 'Referal One Liner',
}

export const referalBordered = () => {
    return <MoleculesReferalBordered />
}

referalBordered.story = {
    name: 'Referal Bordered',
}
