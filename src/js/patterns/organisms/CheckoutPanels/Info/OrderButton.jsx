import React from 'react'
import PropTypes from 'prop-types'

import Button from 'Atoms/button'
import Markdown from '@frontastic/catwalk/src/js/component/markdown'

const OrderButton = ({ label, disabled = false, onClick, vouchersLabel }) => {
    return (
        <>
            <Button name={label} variant='btn btn-primary w-full h-10' disabled={disabled} onClick={onClick}>
                {label}
            </Button>

            {vouchersLabel && (
                <div className='mt-4 text-xs text-neutral-600 text-center'>
                    <Markdown text={vouchersLabel} />
                </div>
            )}
        </>
    )
}

OrderButton.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    vouchersLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default OrderButton
