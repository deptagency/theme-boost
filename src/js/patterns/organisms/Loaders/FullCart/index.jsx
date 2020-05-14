import React, { Component } from 'react'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import ContentLoader from 'react-content-loader'

class FullCartLoader extends Component {
    render () {
        return (<div>
            <ContentLoader
                height={2000}
                width={1000}
                speed={2}
                primaryColor='#d9d9d9'
                secondaryColor='#787878'
            >
                {/* Large screen  */}
                <rect className='hidden md:block' x='600' y='30' rx='20' ry='20' width='280' height='150' />
                <rect className='hidden md:block' x='140' y='30' rx='10' ry='10' width='100' height='20' />
                {/* First product  */}
                <rect className='hidden md:block' x='140' y='70' rx='20' ry='20' width='100' height='150' />
                <rect className='hidden md:block' x='250' y='70' rx='10' ry='10' width='120' height='15' />
                <rect className='hidden md:block' x='250' y='95' rx='10' ry='10' width='80' height='11' />
                <rect className='hidden md:block' x='510' y='70' rx='10' ry='10' width='60' height='18' />
                <rect className='hidden md:block' x='250' y='110' rx='5' ry='5' width='70' height='8' />
                <rect className='hidden md:block' x='250' y='125' rx='5' ry='5' width='70' height='8' />
                <rect className='hidden md:block' x='250' y='150' rx='8' ry='8'width='80' height='30' />
                <rect className='hidden md:block' x='250' y='200' rx='5' ry='5' width='70' height='20' />
                {/* Second product  */}
                <rect className='hidden md:block' x='140' y='240' rx='20' ry='20' width='100' height='150' />
                <rect className='hidden md:block' x='250' y='240' rx='10' ry='10' width='120' height='15' />
                <rect className='hidden md:block' x='250' y='265' rx='10' ry='10' width='80' height='11' />
                <rect className='hidden md:block' x='510' y='240' rx='10' ry='10' width='60' height='18' />
                <rect className='hidden md:block' x='250' y='280' rx='5' ry='5' width='70' height='8' />
                <rect className='hidden md:block' x='250' y='295' rx='5' ry='5' width='70' height='8' />
                <rect className='hidden md:block' x='250' y='320' rx='8' ry='8' width='80' height='30' />
                <rect className='hidden md:block' x='250' y='370' rx='5' ry='5' width='70' height='20' />
                {/* Third product  */}
                <rect className='hidden md:block' x='140' y='410' rx='20' ry='20' width='100' height='150' />
                <rect className='hidden md:block' x='250' y='410' rx='10' ry='10' width='120' height='15' />
                <rect className='hidden md:block' x='250' y='435' rx='10' ry='10' width='80' height='11' />
                <rect className='hidden md:block' x='510' y='410' rx='10' ry='10' width='60' height='18' />
                <rect className='hidden md:block' x='250' y='450' rx='5' ry='5' width='70' height='8' />
                <rect className='hidden md:block' x='250' y='465' rx='5' ry='5' width='70' height='8' />
                <rect className='hidden md:block' x='250' y='490' rx='8' ry='8' width='80' height='30' />
                <rect className='hidden md:block' x='250' y='540' rx='5' ry='5' width='70' height='20' />

                {/* Small screen */}
                <rect className='md:hidden' x='40' y='40' rx='20' ry='20' width='220' height='80' />
                <rect className='md:hidden' x='780' y='40' rx='20' ry='20' width='200' height='60' />
                {/* First product  */}
                <rect className='md:hidden' x='40' y='220' rx='20' ry='20' width='220' height='280' />
                <rect className='md:hidden' x='290' y='220' rx='10' ry='10' width='250' height='25' />
                <rect className='md:hidden' x='290' y='260' rx='10' ry='10' width='210' height='20' />
                <rect className='md:hidden' x='290' y='320' rx='5' ry='5' width='120' height='20' />
                <rect className='md:hidden' x='290' y='350' rx='5' ry='5' width='120' height='20' />
                <rect className='md:hidden' x='290' y='390' rx='8' ry='8' width='160' height='60' />
                <rect className='md:hidden' x='290' y='470' rx='5' ry='5' width='70' height='30' />
                {/* Second product  */}
                <rect className='md:hidden' x='40' y='600' rx='20' ry='20' width='220' height='280' />
                <rect className='md:hidden' x='290' y='600' rx='10' ry='10' width='250' height='25' />
                <rect className='md:hidden' x='290' y='660' rx='10' ry='10' width='210' height='20' />
                <rect className='md:hidden' x='290' y='720' rx='5' ry='5' width='120' height='20' />
                <rect className='md:hidden' x='290' y='750' rx='5' ry='5' width='120' height='20' />
                <rect className='md:hidden' x='290' y='790' rx='8' ry='8' width='160' height='60' />
                <rect className='md:hidden' x='290' y='870' rx='5' ry='5' width='70' height='30' />
                {/* Third product  */}
                <rect className='md:hidden' x='40' y='980' rx='20' ry='20' width='220' height='280' />
                <rect className='md:hidden' x='290' y='980' rx='10' ry='10' width='250' height='25' />
                <rect className='md:hidden' x='290' y='1040' rx='10' ry='10' width='210' height='20' />
                <rect className='md:hidden' x='290' y='1100' rx='5' ry='5' width='120' height='20' />
                <rect className='md:hidden' x='290' y='1120' rx='5' ry='5' width='120' height='20' />
                <rect className='md:hidden' x='290' y='1180' rx='8' ry='8' width='160' height='60' />
                <rect className='md:hidden' x='290' y='1250' rx='5' ry='5' width='70' height='30' />
            </ContentLoader>
        </div>)
    }
}

FullCartLoader.propTypes = {
}

FullCartLoader.defaultProps = {
}

export default ComponentInjector.return('FullCartLoader', FullCartLoader)
