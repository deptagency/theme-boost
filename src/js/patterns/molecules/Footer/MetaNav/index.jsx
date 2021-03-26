import React from 'react'
import PropTypes from 'prop-types'

import List from '../../List'

const MetaNav = ({ title, links }) => {
    return (
        <div className='px-4 flex items-center h-12 text-neutral-600 bg-neutral-900'>
            {title && <div className='text-xs text-neutral-100 leading-tight font-bold'>{title}</div>}

            {links && links.lenght > 0 && (
                <List
                    links={links}
                    variant='ml-auto flex justify-end items-center h-full'
                    itemVariant='mx-2 text-sm leading-none'
                />
            )}
        </div>
    )
}

MetaNav.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    links: PropTypes.array,
}

export default MetaNav
