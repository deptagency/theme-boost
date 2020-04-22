import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from 'Atoms/button'
import Input from 'Atoms/input'

const OverviewPanel = ({ name, errorMessage, goToPreviousPanel }) => {
    const [ valid, setValid ] = useState(true)
    const [ info, setInfo ] = useState('')

    return (
        <div
            className={classnames({
                'flex items-center h-full-84px bg-gray-500 rounded p-4': true,
                'text-gray-600 bold text-xl italic text-center pt-40': true,
            })}
            >
            <h3>{name}</h3>
            <Input
                className={classnames({
                    'form-input': true,
                    'border border-red-600': !valid,
                })}
                placeholder='Enter your email'
                onChange={(e) => {
                    setValid(e.target.value.length > 0)
                    setInfo(e.target.value)
                }}
            />
            {!valid && <div className='text-red-600 font-bold'>
                {errorMessage}
            </div>}

            <Button
                variant='btn btn-indigo mt-4 mr-4'
                onClick={goToPreviousPanel}
            >
                Back
            </Button>

            <Button
                variant='btn btn-indigo mt-4'
                onClick={() => {
                    if (info.length === 0) {
                        setValid(false)
                        return
                    }

                    valid && console.log('redirect to the final (success/unsuccess) page')
                }}

            >
                Done
            </Button>
        </div>
    )
}

OverviewPanel.propTypes = {
    name: PropTypes.node.isRequired,
    errorMessage: PropTypes.string,
    goToPreviousPanel: PropTypes.func.isRequired,
}

export default OverviewPanel
