import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as CloseIcon } from 'Icons/tailwind-icons/icon-close-black.svg'

const PlainModal = ({ onClose, children, title = '', variant = '' }) => {
    const node = useRef()

    useEffect(() => {
        const handleClick = ({ target }) => {
            !node.current.contains(target) && onClose()
        }

        document.addEventListener('mousedown', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [onClose])

    return (
        <div className={variant}>
            <div className='text-neutral-800 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                <div ref={node} className='relative w-auto my-6 mx-auto max-w-3xl'>

                    <div className='rounded-lg shadow-lg relative flex flex-col w-full bg-background-primary outline-none focus:outline-none'>
                        <div className='flex items-start justify-between p-5 border-b-4 border-neutral-100 rounded-t'>
                            {title}
                            <button
                                className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                                onClick={onClose}
                            >
                                <CloseIcon className='fill-current text-neutral-800' />
                            </button>
                        </div>

                        <div className='text-neutral-600 text-sm relative p-6 pb-10 flex-auto leading-relaxed w-fix-488px'>
                            {children}
                        </div>
                    </div>

                </div>
            </div>
            <div
                onClick={onClose}
                className='opacity-25 fixed inset-0 z-40 bg-black'
            />
        </div>
    )
}

PlainModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    title: PropTypes.any,
    variant: PropTypes.string,
}

export default PlainModal
