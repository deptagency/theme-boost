import React from 'react'
import { action } from '@storybook/addon-actions'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'

import MenuItem from 'Molecules/Account/Menu/MenuItem'

import { ReactComponent as CartIcon } from 'Icons/tailwind-icons/icon-cart.svg'
import { ReactComponent as RightIcon } from 'Icons/tailwind-icons/icon-chevron-right.svg'
import { ReactComponent as HomeIcon } from 'Icons/tailwind-icons/icon-home.svg'
import { ReactComponent as UserIcon } from 'Icons/tailwind-icons/icon-user.svg'
// TODO: import statement not conform with Airbnb. Pls fix webpack config
import EmptyState, { icons } from 'Organisms/EmptyState/index'
import { ReactComponent as IconCheckmarkCircle } from 'Icons/tailwind-icons/icon-check-circle.svg'
import { ReactComponent as IconEmotionSad } from 'Icons/tailwind-icons/icon-emotion-sad.svg'

export default {
    title: 'Empty State',
}

export const orderConfirmed = () => {
    return (
        <>
            <EmptyState
                title={<FormattedMessage id='checkout.orderConfirmed' />}
                subtitle={
                    <>
                        <FormattedMessage id='checkout.orderId' /> 123
                    </>
                }
                action={action('action click')}
                actionLabel={<FormattedMessage id='checkout.continueShopping' />}
                icon={<IconCheckmarkCircle className='w-20 h-20 inline-block text-secondary-main fill-current' />}
                >
                <FormattedMessage id='checkout.orderConfirmation' />
                <span className='font-bold ml-1'>bla@bla.com</span>
            </EmptyState>
        </>
    )
}

export const error = () => {
    return (
        <EmptyState
            icon={<IconEmotionSad className='w-20 h-20 inline-block text-neutral-400 fill-current' />}
            title={<FormattedMessage id='checkout.wentWrong' />}
            subtitle={<FormattedMessage id='checkout.beenCharged' />}
            action={action('try again click')}
            actionLabel={<FormattedMessage id='checkout.tryAgain' />}
        />
    )
}

export const iconAsString = () => {
    return (
        <EmptyState
            icon={icons.CHECKMARK_CIRCLE}
            iconColor='text-red-500'
            title={<FormattedMessage id='checkout.wentWrong' />}
            subtitle={<FormattedMessage id='checkout.beenCharged' />}
            action={action('try again click')}
            actionLabel={<FormattedMessage id='checkout.tryAgain' />}
        />
    )
}

export const smile = () => {
    return (
        <EmptyState
            icon={icons.EMOTION_HAPPY}
            iconColor='text-system-warning'
            title={'Everyday you should smile at least twice!'}
        />
    )
}

export const WithAMenu = () => {
    return (
        <EmptyState
            icon={icons.EMOTION_HAPPY}
            iconColor='text-primary-light'
            title={
                <>
                    {' '}
                    <FormattedMessage id='account.welcome' />
                    Jane Appleseed
                </>
            }
            >
            <div className='flex flex-col text-center justify-center w-64 mx-auto my-5 md:pb-56'>
                <div className='text-sm text-neutral-600 mb-12'>
                    <FormattedMessage id='account.latestDetails' />
                </div>
                <div className='flex-auto md:shadow-lg'>
                    <MenuItem className='profileMenuItem'>
                        <div className='flex'>
                            <CartIcon className='mr-2 text-2xl text-neutral-600 fill-current' />
                            <div>
                                <FormattedMessage id='account.placedOrders' />
                            </div>
                        </div>
                        <RightIcon className='md:hidden' />
                    </MenuItem>
                    <MenuItem>
                        <div className='flex'>
                            <HomeIcon className='mr-2 text-2xl text-neutral-600 fill-current' />
                            <div>
                                <FormattedMessage id='account.addresses' />
                            </div>
                        </div>
                        <RightIcon className='md:hidden' />
                    </MenuItem>
                    <MenuItem onClick={action('toggle account details')} selected>
                        <div className='flex'>
                            <UserIcon
                                className={classnames({
                                    'mr-2 text-2xl text-neutral-600 fill-current': true,
                                    'text-primary-main': true,
                                })}
                            />
                            <div>
                                <FormattedMessage id='account.accountDetails' />
                            </div>
                        </div>
                        <RightIcon className='md:hidden' />
                    </MenuItem>
                    <MenuItem onClick={action('logout')}>
                        <div className='flex'>
                            <UserIcon className='mr-2 text-2xl text-neutral-600 fill-current' />
                            <FormattedMessage id='account.logout' />
                        </div>
                    </MenuItem>
                </div>
            </div>
        </EmptyState>
    )
}
