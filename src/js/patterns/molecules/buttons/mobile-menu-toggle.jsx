import React from 'react'
import PropTypes from 'prop-types'

const MenuIcon = () => {
    return (
        <svg
            className='c-icon o-block-short__icon'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M22.5 2.5H1.5C0.947715 2.5 0.5 2.94772 0.5 3.5V4.5C0.5 5.05228 0.947715 5.5 1.5 5.5H22.5C23.0523 5.5 23.5 5.05228 23.5 4.5V3.5C23.5 2.94772 23.0523 2.5 22.5 2.5Z' />
            <path d='M22.5 10.5H1.5C0.947715 10.5 0.5 10.9477 0.5 11.5V12.5C0.5 13.0523 0.947715 13.5 1.5 13.5H22.5C23.0523 13.5 23.5 13.0523 23.5 12.5V11.5C23.5 10.9477 23.0523 10.5 22.5 10.5Z' />
            <path d='M22.5 18.5H1.5C0.947715 18.5 0.5 18.9477 0.5 19.5V20.5C0.5 21.0523 0.947715 21.5 1.5 21.5H22.5C23.0523 21.5 23.5 21.0523 23.5 20.5V19.5C23.5 18.9477 23.0523 18.5 22.5 18.5Z' />
        </svg>
    )
}
const CloseIcon = () => {
    return (
        <svg
            viewBox='0 0 24 23'
            fill='none'
            width='24'
            height='24'
            className='c-icon o-block-short__short-item'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M1.392 20.547A1.44 1.44 0 0 0 2.407 23c.38 0 .744-.152 1.013-.422l8.852-8.875a.236.236 0 0 1 .169-.07.238.238 0 0 1 .169.07l8.851 8.877a1.432 1.432 0 0 0 2.448-1.016 1.44 1.44 0 0 0-.42-1.016l-8.85-8.88a.24.24 0 0 1 0-.339l8.852-8.876A1.44 1.44 0 0 0 22.475 0c-.38 0-.745.152-1.014.422L12.61 9.296a.24.24 0 0 1-.338 0L3.42.422A1.433 1.433 0 0 0 .973 1.438c0 .38.15.747.42 1.016l8.85 8.876a.24.24 0 0 1 0 .34l-8.85 8.877z'
                fill='#000'
            />
        </svg>
    )
}

const MobileMenuToggle = ({ isMenuOpen, onToggle, className }) => {
    return (
        <a onClick={onToggle} title='Menü' className={`o-block-short c-mobile-nav-toggle ${className}`}>
            {!isMenuOpen ? <MenuIcon /> : <CloseIcon />}
        </a>
    )
}

MobileMenuToggle.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func,
    className: PropTypes.string,
}

export default MobileMenuToggle
