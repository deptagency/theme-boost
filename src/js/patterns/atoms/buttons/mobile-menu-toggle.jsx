import React from 'react'
import PropTypes from 'prop-types'

const MenuIcon = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'>
            <path className='heroicon-ui' d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z' />
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
        <a onClick={onToggle} title='Menü' className='mt-8 lg:hidden'>
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
