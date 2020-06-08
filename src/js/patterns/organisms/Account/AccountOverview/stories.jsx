import React from 'react'
import { ReactComponent as HappyIcon } from 'Icons/tailwind-icons/icon-emotion-happy.svg'
import { ReactComponent as CartIcon } from 'Icons/tailwind-icons/icon-cart.svg'
import { ReactComponent as RightIcon } from 'Icons/tailwind-icons/icon-chevron-right.svg'
import { ReactComponent as HomeIcon } from 'Icons/tailwind-icons/icon-home.svg'
import { ReactComponent as UserIcon } from 'Icons/tailwind-icons/icon-user.svg'

export default {
    title: 'Account overview',
}

export const accountOverview = () => {
    return (
        <>
            <div className='m-auto md:flex md:w-11/12 text-gray-800 md:h-full-84px'>
                <div className='flex-auto md:shadow-lg md:order-2 md:mt-10 md:w-7/12 md:ml-4 lg:ml-5'>
                    <div className='flex flex-col text-center justify-center w-64 mx-auto my-5 md:pb-56'>
                        <div className='mx-auto mb-5'>
                            <HappyIcon className='w-20 h-20 text-indigo-200 fill-current' />
                        </div>
                        <div>
                            <div className='font-bold text-2xl mb-2'>
                                Welcome Alexandra!
                            </div>
                            <div className='text-sm text-gray-600'>
                                Here you can view your latest orders and change your account details.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex-auto mt-10 md:shadow-lg md:w-4/12'>
                    <button className='flex mx-auto w-5/6 sm:w-8/12 md:w-5/6 md:mt-5 justify-between border-b pb-4 mb-6'>
                        <div className='flex'>
                            <CartIcon className='mr-2 text-2xl text-gray-500 fill-current' />
                            <div>
                                Orders
                            </div>
                        </div>
                        <RightIcon className='md:hidden' />
                    </button>
                    <button className='flex mx-auto w-5/6 sm:w-8/12 md:w-5/6 md:mt-5 justify-between border-b pb-4 mb-6'>
                        <div className='flex'>
                            <HomeIcon className='mr-2 text-2xl text-gray-500 fill-current' />
                            <div>
                                Addresses
                            </div>
                        </div>
                        <RightIcon className='md:hidden' />
                    </button>
                    <button className='flex mx-auto w-5/6 sm:w-8/12 md:w-5/6 md:mt-5 justify-between border-b pb-4 mb-6'>
                        <div className='flex'>
                            <UserIcon className='mr-2 text-2xl text-gray-500 fill-current' />
                            <div>
                                Account Details
                            </div>
                        </div>
                        <RightIcon className='md:hidden' />
                    </button>
                </div>
            </div>
        </>
    )
}
