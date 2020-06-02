import React from 'react'

import Button from 'Atoms/button'

export default {
    title: 'Account(markup)',
}

export const login = () => {
    return (
        <div className='w-screen h-screen md:bg-gray-200 flex flex-col items-center'>
            <div className='mt-0 md:mt-8 flex flex-col items-center bg-white w-full md:w-160'>
                <div className='px-4 my-8 w-full sm:w-100'>
                    <div className='mb-8 text-2xl sm:text-3xl text-center font-bold leading-none'>
                        Log in
                    </div>

                    <form>
                        <div className='mb-4'>
                            <label className='text-sm text-gray-700 leading-tight' htmlFor='login-email'>
                                Email
                            </label>
                            <input id='login-email' name='email' type='text' className='form-input mt-2' />
                        </div>

                        <div className='mb-5'>
                            <label className='text-sm text-gray-700 leading-tight' htmlFor='login-password'>
                                Password
                            </label>
                            <input id='login-password' name='password' type='password' className='form-input mt-2' />
                        </div>

                        <Button variant='btn btn-indigo w-full h-10'>
                            Log in
                        </Button>

                        <div className='mt-4 text-sm text-center text-gray-800 leading-tight'>
                            Forgot Password?
                        </div>
                    </form>
                </div>

                <div className='-mx-4 w-full h-1 bg-gray-100 md:none' />

                <div className='px-4 my-5 w-full md:w-100 text-center'>
                    <div className='mb-5 text-lg text-center text-gray-500 font-bold'>
                        New to Catwalk?
                    </div>

                    <Button variant='btn-outline btn-outline-black w-64 h-10'>
                        Create account
                    </Button>
                </div>
            </div>
        </div>
    )
}

export const signup = () => {
    return (
        <div className='bg-gray-200'>
            <div className='flex items-center justify-center py-4'>
                <span className='mr-8 text-base text-gray-500 leading-tight font-bold'>
                    Already registered?
                </span>
                <Button variant='btn-outline btn-outline-black w-24 h-10'>
                    Log in
                </Button>
            </div>

            <div className='mx-auto py-5 sm:py-10 w-full md:w-160 bg-white'>
                <div className='px-4 mx-auto w-full sm:w-100'>
                    <div className='mb-1 text-center text-sm text-gray-500 leading-tight'>
                        New to catwalk?
                    </div>

                    <div className='mb-6 text-center text-2xl sm:text-3xl text-gray-800 leading-none font-bold'>
                        Sign up
                    </div>

                    <form>
                        <div className='mb-4'>
                            <label className='text-sm text-gray-700 leading-tight' htmlFor='signup-firstname'>
                                First name
                            </label>
                            <input id='login-firstname' name='email' type='text' className='form-input mt-2' />
                        </div>

                        <div className='mb-4'>
                            <label className='text-sm text-gray-700 leading-tight' htmlFor='signup-lastname'>
                                Last name
                            </label>
                            <input id='login-lastname' name='email' type='text' className='form-input mt-2' />
                        </div>

                        <div className='mb-4'>
                            <label className='text-sm text-gray-700 leading-tight' htmlFor='signup-email'>
                                Email
                            </label>
                            <input id='signup-email' name='email' type='text' className='form-input mt-2' />
                        </div>

                        <div className='mb-5'>
                            <label className='text-sm text-gray-700 leading-tight' htmlFor='login-password'>
                                Password
                            </label>
                            <input id='login-password' name='password' type='password' className='form-input mt-2' />

                            <div className='mt-2 text-xs text-gray-600 leading-tight'>
                                Must be at least 10 characters
                            </div>
                        </div>

                        <div className='my-5 h-2px bg-gray-100' />

                        <div className=''>
                            <div className='mb-4 text-base text-gray-800 leading-tight font-bold'>
                                Mostly interested in
                            </div>

                            <div className='mb-4'>
                                <input id='interested-women' type='checkbox' value='women' className='mr-2' />
                                <label htmlFor='interested-women' className='text-sm text-gray-800 leading-tight'>Womenswear</label>
                            </div>

                            <div>
                                <input id='interested-men' type='checkbox' value='men' className='mr-2' />
                                <label htmlFor='interested-men' className='text-sm text-gray-800 leading-tight'>Menswear</label>
                            </div>
                        </div>

                        <div className='my-5 h-2px bg-gray-100' />

                        <div className='mb-6 text-sm text-gray-800'>
                            <input id='promo' type='checkbox' value='promo' className='mr-2' />
                            <label htmlFor='promo'>
                                We'll send you only the good stuff: Exclusive early access to Sale, new arrivals and promotions.
                            </label>
                        </div>

                        <Button variant='btn btn-indigo w-full h-10'>
                            Join Catwalk
                        </Button>

                        <div className='mt-5 text-xs text-gray-600 leading-tight'>
                            By creating your account, you agree to our Terms and Conditions & Privacy policy
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
