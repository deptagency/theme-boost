import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsCreditCard extends Component {
    render () {
        return (<div>
            <div className='c-box c-box--l o-creditcard t-universe t-box-shadow t-text-ghost'>
                <div className='o-creditcard__header'>
                    <svg width='64' height='20' viewBox='0 0 64 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M23.6001 19L26.8001 1H31.8001L28.7001 19H23.6001Z' fill='white' />
                        <path d='M23.6001 19L27.7001 1H31.8001L28.7001 19H23.6001Z' fill='white' />
                        <path d='M46.8 1.1999C45.8 0.799903 44.2 0.399902 42.2 0.399902C37.2 0.399902 33.6 2.8999 33.6 6.4999C33.6 9.1999 36.1 10.5999 38.1 11.4999C40.1 12.3999 40.7 12.9999 40.7 13.7999C40.7 14.9999 39.1 15.5999 37.7 15.5999C35.7 15.5999 34.6 15.2999 32.9 14.5999L32.2 14.2999L31.5 18.3999C32.7 18.8999 34.9 19.3999 37.2 19.3999C42.5 19.3999 46 16.8999 46 13.0999C46 10.9999 44.7 9.3999 41.7 8.0999C39.9 7.1999 38.8 6.6999 38.8 5.7999C38.8 4.9999 39.7 4.1999 41.7 4.1999C43.4 4.1999 44.6 4.4999 45.5 4.8999L46 5.0999L46.8 1.1999Z' fill='white' />
                        <path d='M46.8 1.1999C45.8 0.799903 44.2 0.399902 42.2 0.399902C37.2 0.399902 34.5 2.8999 34.5 6.4999C34.5 9.1999 36.1 10.5999 38.1 11.4999C40.1 12.3999 40.7 12.9999 40.7 13.7999C40.7 14.9999 39.1 15.5999 37.7 15.5999C35.7 15.5999 34.6 15.2999 32.9 14.5999L32.2 14.2999L31.5 18.3999C32.7 18.8999 34.9 19.3999 37.2 19.3999C42.5 19.3999 46 16.8999 46 13.0999C46 10.9999 44.7 9.3999 41.7 8.0999C39.9 7.1999 38.8 6.6999 38.8 5.7999C38.8 4.9999 39.7 4.1999 41.7 4.1999C43.4 4.1999 44.6 4.4999 45.5 4.8999L46 5.0999L46.8 1.1999Z' fill='white' />
                        <path d='M55.3998 1C54.1998 1 53.2998 1.1 52.7998 2.3L45.2998 19H50.6998L51.6998 16H58.0998L58.6998 19H63.4998L59.2998 1H55.3998ZM53.0998 13C53.3998 12.1 55.0998 7.7 55.0998 7.7C55.0998 7.7 55.4998 6.6 55.7998 5.9L56.0998 7.6C56.0998 7.6 57.0998 12.1 57.2998 13.1H53.0998V13Z' fill='white' />
                        <path d='M56.5998 1C55.3998 1 54.4998 1.1 53.9998 2.3L45.2998 19H50.6998L51.6998 16H58.0998L58.6998 19H63.4998L59.2998 1H56.5998ZM53.0998 13C53.4998 12 55.0998 7.7 55.0998 7.7C55.0998 7.7 55.4998 6.6 55.7998 5.9L56.0998 7.6C56.0998 7.6 57.0998 12.1 57.2998 13.1H53.0998V13Z' fill='white' />
                        <path d='M14.3999 13.6001L13.8999 11.0001C12.9999 8.0001 10.0999 4.7001 6.8999 3.1001L11.3999 19.1001H16.7999L24.8999 1.1001H19.4999L14.3999 13.6001Z' fill='white' />
                        <path d='M14.3999 13.6001L13.8999 11.0001C12.9999 8.0001 10.0999 4.7001 6.8999 3.1001L11.3999 19.1001H16.7999L24.8999 1.1001H20.4999L14.3999 13.6001Z' fill='white' />
                        <path d='M0.5 1L1.4 1.2C7.8 2.7 12.2 6.5 13.9 11L12.1 2.5C11.8 1.3 10.9 1 9.8 1H0.5Z' fill='white' />
                        <path d='M0.5 1C6.9 2.5 12.2 6.4 13.9 10.9L12.2 3.8C11.9 2.6 10.9 1.9 9.8 1.9L0.5 1Z' fill='white' />
                        <path d='M0.5 1C6.9 2.5 12.2 6.4 13.9 10.9L12.7 7C12.4 5.8 12 4.6 10.6 4.1L0.5 1Z' fill='white' />
                        <path d='M19.4 13L16 9.6L14.4 13.4L14 10.9C13.1 7.9 10.2 4.6 7 3L11.5 19H16.9L19.4 13Z' fill='white' />
                        <path d='M28.7001 19.0001L24.4001 14.6001L23.6001 19.0001H28.7001Z' fill='white' />
                        <path d='M40.2 12.7998C40.6 13.1998 40.8 13.4998 40.7 13.8998C40.7 15.0998 39.1 15.6998 37.7 15.6998C35.7 15.6998 34.6 15.3998 32.9 14.6998L32.2 14.3998L31.5 18.4998C32.7 18.9998 34.9 19.4998 37.2 19.4998C40.4 19.4998 43 18.5998 44.5 16.9998L40.2 12.7998Z' fill='white' />
                        <path d='M46 18.9999H50.7L51.7 15.9999H58.1L58.7 18.9999H63.5L61.8 11.6999L55.8 5.8999L56.1 7.4999C56.1 7.4999 57.1 11.9999 57.3 12.9999H53.1C53.5 11.9999 55.1 7.6999 55.1 7.6999C55.1 7.6999 55.5 6.5999 55.8 5.8999' fill='white' />
                    </svg>
                </div>
                <div className='o-creditcard__body'>
                    <div className='o-flex'>
                        <span className='o-flex__item u-text-xxl'>****</span>
                        <span className='o-flex__item u-text-xxl'>****</span>
                        <span className='o-flex__item u-text-xxl'>****</span>
                        <span className='o-flex__item u-text-xxl'>****</span>
                    </div>
                    <div className='o-flex o-flex--end'>
                        <p className='c-category-title o-flex__item'>CVC</p>
                        <span className='o-flex__item'>***</span>
                    </div>
                </div>
                <div className='o-creditcard__footer'>
                    <div>
                        <p className='c-category-title'>Karteninhaber</p>
                        <p>Vorname Nachname</p>
                    </div>
                    <div>
                        <p className='c-category-title'>Gültig bis</p>
                        <p>MM / YYYY</p>
                    </div>
                </div>
            </div>
        </div>)
    }
}

OrganismsCreditCard.propTypes = {
}

OrganismsCreditCard.defaultProps = {
}

export default ComponentInjector.return('OrganismsCreditCard', OrganismsCreditCard)
