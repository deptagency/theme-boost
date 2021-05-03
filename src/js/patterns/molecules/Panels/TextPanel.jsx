import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Chevron } from '../../../../icons/tailwind-icons/icon-cheveron-down.svg'
import Markdown from '@frontastic/catwalk/src/js/component/markdown'

function TextPanel ({ title, body }) {
    const [open, setOpen] = useState(false)
    return (
        body && (
            <div className='pb-4 pt-5 border-t border-gray-300'>
                <h3
                    className='flex justify-between font-bold cursor-pointer text-gray-900 mb-2'
                    onClick={() => setOpen(!open)}
                >
                    <span>{title || ''}</span>
                    <i className='text-xl'>
                        <Chevron
                            className={`transition-transform duration-500 ease-in-out ${
                                open ? 'transform rotate-180' : ''
                            }`}
                        />
                    </i>
                </h3>
                <Markdown
                    className={`markdown-text text-sm text-gray-700 overflow-hidden transition-max-height duration-300 ease-in ${
                        open ? 'max-h-736px' : 'hidden'
                    }`}
                    text={body}
                />
            </div>
        )
    )
}

TextPanel.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
}

export default TextPanel
