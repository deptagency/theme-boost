import React from 'react'
import Button from 'Atoms/button'

import { ReactComponent as LeftIcon } from 'Icons/tailwind-icons/icon-cheveron-left.svg'
import { ReactComponent as EditIcon } from 'Icons/tailwind-icons/icon-edit.svg'
import { ReactComponent as CloseIcon } from 'Icons/tailwind-icons/icon-close-black.svg'

export default {
    title: 'Account details',
}

export const accountDetails = () => {
    return (
        <>
            <div className='m-auto md:flex md:w-11/12 text-neutral-900'>
                <div className='flex-auto md:order-2 md:mt-10 md:w-7/12 md:ml-4 lg:ml-5'>
                    <div className='font-bold text-2xl my-5 md:ml-6 flex'>
                        <button>
                            <LeftIcon className='md:hidden mx-3 text-3xl' />
                        </button>
                        Account Details
                    </div>

                    <div className='flex flex-col md:shadow-lg md:ml-0'>
                        <div className='border-b-4 border-neutral-200' />
                        <div className='md:pb-10 mx-6'>
                            <div className='mt-6 mb-6 sm:ml-24 md:ml-5'>
                                <div className='mb-4'>
                                    <div className='text-sm text-neutral-600'>First name </div>
                                    <div>Alexandra</div>
                                </div>
                                <div className='mb-4'>
                                    <div className='text-sm text-neutral-600'>Last name </div>
                                    <div>Jones </div>
                                </div>
                                <div className='mb-4'>
                                    <div className='text-sm text-neutral-600'> Email Address </div>
                                    <div>alexandra.jones@gmail.com </div>
                                </div>
                                <div className='text-sm text-primary-500 leading-tight cursor-pointer flex items-center'>
                                    Edit<EditIcon className='inline fill-current text-sm ml-2' />
                                </div>
                            </div>
                            <div className='border-b-4 border-neutral-200' />
                            <div className='text-center mt-6'>
                                <Button variant='btn-outline btn-outline-black'>
                                    Change password
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const editDetails = () => {
    return (
        <>
            <div className='m-auto md:flex md:w-11/12 text-neutral-900'>
                <div className='flex-auto md:order-2 md:mt-10 md:w-7/12 md:ml-4 lg:ml-5'>
                    <div className='font-bold text-2xl my-5 mx-6 flex justify-between'>
                        Edit Details
                        <button>
                            <CloseIcon className='fill-current text-neutral-900' />
                        </button>
                    </div>
                    <div className='border-b-4 border-neutral-200' />

                    <form className='flex-col mx-6 mt-6 sm:mx-auto sm:w-7/12 lg:w-3/6'>
                        <div className='mb-4'>
                            <div className='text-sm text-neutral-600'>First name </div>
                            <input
                                id='login-firstname'
                                name='firstName'
                                type='text'
                                className='form-input mt-2'
                            />
                        </div>
                        <div className='mb-4'>
                            <div className='text-sm text-neutral-600'>Last name </div>
                            <input
                                id='login-lastname'
                                name='lastName'
                                type='text'
                                className='form-input mt-2'
                            />
                        </div>
                        <div className='mb-4'>
                            <div className='text-sm text-neutral-600'>Email address </div>
                            <input
                                id='signup-email'
                                name='email'
                                type='text'
                                className='form-input mt-2'
                            />
                        </div>
                        <div className='mb-4'>
                            <div className='text-sm text-neutral-600'>Repeat email address </div>
                            <input
                                id='signup-email'
                                name='email'
                                type='text'
                                className='form-input mt-2'
                            />
                        </div>
                        <div className='text-center mt-6'>
                            <Button variant='btn btn-primary w-full'>
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export const changePassword = () => {
    return (
        <div>
            <div className='m-auto md:flex md:w-11/12 text-neutral-900'>
                <div className='flex-auto md:order-2 md:mt-10 md:w-7/12 md:ml-4 lg:ml-5'>
                    <div className='font-bold text-2xl my-5 mx-6 flex justify-between'>
                        Change Password
                        <button>
                            <CloseIcon className='fill-current text-neutral-900' />
                        </button>
                    </div>
                    <div className='border-b-4 border-neutral-200' />

                    <form className='flex-col mx-6 mt-6 sm:mx-auto sm:w-7/12'>

                        <div className='text-neutral-600 text-sm'>
                            <span>In order to </span>
                            <span className='font-bold'> protect your account, </span>
                            <span> your password must contain:</span>

                            <ul className='list-disc m-4'>
                                <li>At least 10 caracters</li>
                                <li>One uppercase letter</li>
                                <li>One number</li>
                                <li>One special caracter (! # % +)</li>
                            </ul>
                        </div>

                        <div className='mt-6 mb-4'>
                            <div className='mb-4'>
                                <div className='text-sm text-neutral-600'>Password </div>
                                <input
                                    id='login-password'
                                    name='password'
                                    type='password'
                                    className='form-input mt-2'
                                />
                            </div>
                            <div className='mb-4'>
                                <div className='text-sm text-neutral-600'>New password </div>
                                <input
                                    id='login-password'
                                    name='password'
                                    type='password'
                                    className='form-input mt-2'
                                />
                            </div>
                            <div className='mb-4'>
                                <div className='text-sm text-neutral-600'>Confirm new password </div>
                                <input
                                    id='login-password'
                                    name='password'
                                    type='password'
                                    className='form-input mt-2'
                                />
                            </div>
                            <div className='text-center mt-6'>
                                <Button variant='btn btn-primary w-full'>
                                    Change password
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export const modalChangePassword = () => {
    return (
        <div>
            <div className='text-neutral-900 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                    <div className='rounded-lg shadow-lg relative flex flex-col w-full bg-background-primary outline-none focus:outline-none'>
                        <div className='flex items-start justify-between p-5 border-b-4 border-neutral-200 rounded-t'>
                            <h3 className='text-3xl font-semibold'>
                                Change password
                            </h3>
                            <button className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'>
                                <CloseIcon className='fill-current text-neutral-900' />
                            </button>
                        </div>

                        <div className='text-neutral-600 text-sm relative p-6 flex-auto leading-relaxed'>
                            <form className='flex-col mx-6'>
                                <div className='text-neutral-600 text-sm'>
                                    <span>In order to </span>
                                    <span className='font-bold'> protect your account, </span>
                                    <span> your password must contain:</span>

                                    <ul className='list-disc m-4'>
                                        <li>At least 10 caracters</li>
                                        <li>One uppercase letter</li>
                                        <li>One number</li>
                                        <li>One special caracter (! # % +)</li>
                                    </ul>
                                </div>

                                <div className='mt-6 mb-4'>
                                    <div className='mb-4'>
                                        <div className='text-sm text-neutral-600'>Password </div>
                                        <input
                                            id='login-password'
                                            name='password'
                                            type='password'
                                            className='form-input mt-2'
                                    />
                                    </div>
                                    <div className='mb-4'>
                                        <div className='text-sm text-neutral-600'>New password </div>
                                        <input
                                            id='login-password'
                                            name='password'
                                            type='password'
                                            className='form-input mt-2'
                                    />
                                    </div>
                                    <div className='mb-4'>
                                        <div className='text-sm text-neutral-600'>Confirm new password </div>
                                        <input
                                            id='login-password'
                                            name='password'
                                            type='password'
                                            className='form-input mt-2'
                                    />
                                    </div>
                                    <div className='text-center mt-6'>
                                        <Button
                                            variant='btn btn-primary w-full'
                                            type='button'
                                            style={{ transition: 'all .15s ease' }}
                                        >
                                            Change password
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black' />
        </div>
    )
}
