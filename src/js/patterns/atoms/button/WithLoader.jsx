import React from 'react'
import PropTypes from 'prop-types'

import Button from 'Atoms/button'
import LoaderButton from 'Molecules/Loaders/LoaderButton'

const ButtonWithLoader = ({
    name,
    showLoader = false,
    onClick = () => {},
    variant = '',
    children,
    ...otherProps
}) => {
    return (
        <>
            {showLoader ?
                <LoaderButton /> :
                <Button
                    name={name}
                    variant={variant}
                    onClick={onClick}
                    style={{ transition: 'all .15s ease' }}
                    {...otherProps}
                    >
                    {children}
                </Button>}
        </>
    )
}

ButtonWithLoader.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    showLoader: PropTypes.bool,
    variant: PropTypes.string,
    children: PropTypes.any.isRequired,
}

export default ButtonWithLoader
