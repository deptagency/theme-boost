import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import app from '@frontastic/catwalk/src/js/app/app'

import { ReactComponent as ArrowRight } from 'Icons/tailwind-icons/icon-chevron-right.svg'
import { ReactComponent as MyProfile } from 'Icons/tailwind-icons/icon-user.svg'
import { ReactComponent as HelpIcon } from 'Icons/tailwind-icons/icon-help.svg'
import { ReactComponent as ChatIcon } from 'Icons/tailwind-icons/icon-chat.svg'
import { ReactComponent as AnnouncementIcon } from 'Icons/tailwind-icons/icon-announcement.svg'

const AccountLinks = ({
    closeMobileMenu,
    infoHeader,
    infoHeaderIcon,
    aboutHeader,
    aboutHeaderIcon,
    contacHeader,
    contactHeaderIcon,
}) => {
    const loggedIn = useSelector((state) => {
        return state.app.context.session.loggedIn
    })
    const iconMap = {
        help: HelpIcon,
        chat: ChatIcon,
        announcement: AnnouncementIcon,
    }

    const IconHeader = infoHeaderIcon ? iconMap[infoHeaderIcon] : null
    const IconAbout = aboutHeaderIcon ? iconMap[aboutHeaderIcon] : null
    const IconContact = contactHeaderIcon ? iconMap[contactHeaderIcon] : null

    return (
        <>
            <div className='absolute bottom-0 left-0 right-0 text-base'>
                {!loggedIn && <div
                    className='flex border-t-4 border-neutral-200 px-5 pt-6 bg-background-primary'
                    onClick={() => {
                        closeMobileMenu()
                        app.getRouter().push('Frontastic.Frontend.Master.Account.index')
                    }}
                >
                    <MyProfile className='mr-2 w-4 h-4 text-neutral-600 self-center fill-current' />
                    <div className='text-base text-neutral-900 self-center'>
                        <FormattedMessage id='account.login.login' /> | <FormattedMessage id='account.register.createAccount' />
                    </div>
                </div>}

                {loggedIn && <div
                    className='flex justify-between border-b-4 border-t-4 border-neutral-200 p-4'
                    onClick={() => {
                        closeMobileMenu()
                        app.getRouter().push('Frontastic.Frontend.Master.Account.profile')
                    }}
                >
                    <div className='flex'>
                        <MyProfile className='mr-2 w-4 h-4 text-neutral-600 self-center  fill-current' />
                        <div className='text-base font-bold text-neutral-900 self-center'>
                            <FormattedMessage id='header.myAccount' />
                        </div>
                    </div>
                    <div>
                        <ArrowRight className='self-center cursor-pointer text-l' />
                    </div>
                </div>}

                <div className='flex px-5 pt-4 text-neutral-900'>
                    {IconHeader && (
                        <IconHeader className='mr-2 w-4 h-4 text-neutral-600 self-center fill-current' />
                    )}
                    {infoHeader}
                </div>

                <div className='flex px-5 pt-4 text-neutral-900'>
                    {IconContact && (
                        <IconContact className='mr-2 w-4 h-4 text-neutral-600 self-center fill-current' />
                    )}
                    {contacHeader}
                </div>

                <div className='flex px-5 pt-4 pb-5 text-neutral-900'>
                    {IconAbout && (
                        <IconAbout className='mr-2 w-4 h-4 text-neutral-600 self-center fill-current' />
                    )}
                    {aboutHeader}
                </div>
            </div>
        </>
    )
}

AccountLinks.propTypes = {
    closeMobileMenu: PropTypes.func.isRequired,
    infoHeader: PropTypes.object,
    infoHeaderIcon: PropTypes.string,
    aboutHeader: PropTypes.object,
    aboutHeaderIcon: PropTypes.string,
    contacHeader: PropTypes.object,
    contactHeaderIcon: PropTypes.string,
}

export default AccountLinks
