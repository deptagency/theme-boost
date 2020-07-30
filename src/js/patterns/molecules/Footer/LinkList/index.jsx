import React from 'react'
import PropTypes from 'prop-types'

import List from 'Molecules/List'

import { ReactComponent as HelpIcon } from 'Icons/tailwind-icons/icon-help.svg'
import { ReactComponent as ChatIcon } from 'Icons/tailwind-icons/icon-chat.svg'
import { ReactComponent as AnnouncementIcon } from 'Icons/tailwind-icons/icon-announcement.svg'

const LinkList = ({ header, headerIcon, links }) => {
    const iconMap = {
        help: HelpIcon,
        chat: ChatIcon,
        announcement: AnnouncementIcon,
    }

    const Icon = headerIcon ? iconMap[headerIcon] : null

    return (
        <div className='flex flex-col'>
            <div className='mb-4 flex items-center text-sm font-bold leading-tight text-neutral-100'>
                {Icon && (
                    <Icon className='mr-2 w-4 h-4 inline-block text-neutral-500 fill-current' />
                )}

                {header}
            </div>

            <List
                links={links}
                variant='flex flex-col ml-6'
                itemVariant='mb-2 text-sm leading-tight text-neutral-200'
            />
        </div>
    )
}

LinkList.propTypes = {
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    headerIcon: PropTypes.string,
    links: PropTypes.array,
}

export default LinkList
