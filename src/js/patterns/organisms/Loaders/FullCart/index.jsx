import React, { Component } from 'react'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import ContentLoader from 'react-content-loader'

class FullCartLoader extends Component {
    render () {
        return (<div>
            <ContentLoader
                height={896}
                width={1000}
                speed={3}
                primaryColor='#d9d9d9'
                secondaryColor='#787878'
            >
                {/* Large screen  */}

                <rect className='hidden md:block' x='600' y='40' rx='20' ry='20' width='350' height='170' /> {/* checkout box */}
                <rect x='40' y='40' rx='20' ry='20' width='150' height='30' /> {/* my cart */}
                {/* First product  */}
                <rect x='40' y='100' rx='20' ry='20' width='150' height='200' /> {/* product photo */}
                <rect className='hidden md:block' x='220' y='102' rx='10' ry='10' width='170' height='18' /> {/* product name */}
                <rect className='hidden md:block' x='470' y='102' rx='10' ry='10' width='50' height='18' /> {/* product remove */}
                <rect className='hidden md:block' x='220' y='135' rx='10' ry='10' width='130' height='12' /> {/* product name detail */}
                <rect x='220' y='170' rx='5' ry='5' width='100' height='8' /> {/* product color */}
                <rect x='220' y='185' rx='5' ry='5' width='100' height='8' /> {/* product size */}
                <rect x='220' y='210' rx='8' ry='8' width='100' height='50' /> {/* product quantiy */}
                <rect x='220' y='275' rx='5' ry='5' width='70' height='20' /> {/* product price */}
                {/* Second product  */}
                <rect x='40' y='335' rx='20' ry='20' width='150' height='200' />
                <rect className='hidden md:block' x='220' y='337' rx='10' ry='10' width='170' height='18' />
                <rect className='hidden md:block' x='470' y='337' rx='10' ry='10' width='50' height='18' />
                <rect className='hidden md:block' x='220' y='370' rx='10' ry='10' width='130' height='12' />
                <rect x='220' y='405' rx='5' ry='5' width='100' height='8' />
                <rect x='220' y='420' rx='5' ry='5' width='100' height='8' />
                <rect x='220' y='445' rx='8' ry='8' width='100' height='50' />
                <rect x='220' y='510' rx='5' ry='5' width='70' height='20' />
                {/* Third product  */}
                <rect x='40' y='565' rx='20' ry='20' width='150' height='200' />
                <rect className='hidden md:block' x='220' y='567' rx='10' ry='10' width='170' height='18' />
                <rect className='hidden md:block' x='470' y='567' rx='10' ry='10' width='50' height='18' />
                <rect className='hidden md:block' x='220' y='600' rx='10' ry='10' width='130' height='12' />
                <rect x='220' y='635' rx='5' ry='5' width='100' height='8' />
                <rect x='220' y='650' rx='5' ry='5' width='100' height='8' />
                <rect x='220' y='675' rx='8' ry='8' width='100' height='50' />
                <rect x='220' y='740' rx='5' ry='5' width='70' height='20' />

                {/* Small screen */}

                <rect className='md:hidden' x='700' y='40' rx='20' ry='20' width='270' height='30' /> {/* my cart checkout */}
                {/* First product  */}
                <rect className='md:hidden' x='220' y='102' rx='10' ry='10' width='250' height='18' /> {/* product name */}
                <rect className='md:hidden' x='220' y='135' rx='10' ry='10' width='210' height='12' /> {/* product name detail */}
                <rect className='md:hidden' x='800' y='102' rx='20' ry='20' width='170' height='25' /> {/* product remove */}
                {/* Second product  */}
                <rect className='md:hidden' x='220' y='335' rx='10' ry='10' width='250' height='18' /> {/* product name */}
                <rect className='md:hidden' x='220' y='367' rx='10' ry='10' width='210' height='12' /> {/* product name detail */}
                <rect className='md:hidden' x='800' y='335' rx='20' ry='20' width='170' height='25' /> {/* product remove */}
                {/* Third product  */}
                <rect className='md:hidden' x='220' y='565' rx='10' ry='10' width='250' height='18' /> {/* product name */}
                <rect className='md:hidden' x='220' y='597' rx='10' ry='10' width='210' height='12' /> {/* product name detail */}
                <rect className='md:hidden' x='800' y='565' rx='20' ry='20' width='170' height='25' /> {/* product remove */}
            </ContentLoader>
        </div>)
    }
}

FullCartLoader.propTypes = {
}

FullCartLoader.defaultProps = {
}

export default ComponentInjector.return('FullCartLoader', FullCartLoader)