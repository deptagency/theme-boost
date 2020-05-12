import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import ContentLoader from 'react-content-loader'
// import { smallScreen, largeScreen } from './loaders.module.scss'

class FullCartLoader extends Component {
    render () {
        return (<div>
            <ContentLoader
                height={950}
                width={800}
                speed={3}
                primaryColor='#d9d9d9'
                secondaryColor='#787878'
                >
                <rect  x='40' y='15' rx='20' ry='20' width='150' height='200' />

                <rect  x='220' y='17' rx='10' ry='10' width='290' height='18' />

                <rect  x='220' y='50' rx='10' ry='10' width='233' height='12' />

                <rect x='220' y='110' rx='5' ry='5' width='165' height='8' />
                <rect  x='220' y='130' rx='5' ry='5' width='165' height='8' />

                <rect x='220' y='180' rx='8' ry='8' width='100' height='29' />
                <rect x='550' y='15' rx='20' ry='20' width='220' height='200' />

                <rect  x='40' y='320' rx='5' ry='5' width='45' height='35' />
                <rect  x='100' y='320' rx='5' ry='5' width='45' height='35' />
                <rect  x='160' y='320' rx='5' ry='5' width='45' height='35' />
                <rect  x='220' y='320' rx='5' ry='5' width='45' height='35' />

                {/* small screen */}

                {/* <rect className={smallScreen} x='30' y='15' rx='20' ry='20' width='200' height='250' />
                <rect className={smallScreen} x='730' y='17' rx='5' ry='5' width='50' height='50' />
                <rect className={smallScreen} x='250' y='17' rx='10' ry='10' width='250' height='16' />
                <rect className={smallScreen} x='250' y='50' rx='10' ry='10' width='200' height='12' />
                <rect className={smallScreen} x='250' y='130' rx='5' ry='5' width='120' height='8' />
                <rect className={smallScreen} x='250' y='150' rx='5' ry='5' width='120' height='8' />
                <rect className={smallScreen} x='250' y='210' rx='8' ry='8' width='120' height='40' />

                <rect className={smallScreen} x='30' y='315' rx='20' ry='20' width='200' height='250' />
                <rect className={smallScreen} x='730' y='317' rx='5' ry='5' width='50' height='50' />
                <rect className={smallScreen} x='250' y='317' rx='10' ry='10' width='250' height='16' />
                <rect className={smallScreen} x='250' y='350' rx='10' ry='10' width='200' height='12' />
                <rect className={smallScreen} x='250' y='430' rx='5' ry='5' width='120' height='8' />
                <rect className={smallScreen} x='250' y='450' rx='5' ry='5' width='120' height='8' />
                <rect className={smallScreen} x='250' y='510' rx='8' ry='8' width='120' height='40' />

                <rect className={smallScreen} x='30' y='600' rx='5' ry='5' width='60' height='40' />
                <rect className={smallScreen} x='110' y='600' rx='5' ry='5' width='60' height='40' />
                <rect className={smallScreen} x='190' y='600' rx='5' ry='5' width='60' height='40' />
                <rect className={smallScreen} x='270' y='600' rx='5' ry='5' width='60' height='40' />

                <rect className={smallScreen} x='30' y='690' rx='20' ry='20' width='740' height='300' /> */}
            </ContentLoader>
        </div>)
    }
}

FullCartLoader.propTypes = {
}

FullCartLoader.defaultProps = {
}

export default ComponentInjector.return('FullCartLoader', FullCartLoader)