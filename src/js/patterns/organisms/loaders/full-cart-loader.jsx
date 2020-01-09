import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import ContentLoader from 'react-content-loader'
import { smallScreen, largeScreen, blockSmallScreenHide } from './loaders.module.scss'

class FullCartLoader extends Component {
    render () {
        return (<div>
            <ContentLoader
                height={950}
                width={800}
                speed={2}
                primaryColor='#d9d9d9'
                secondaryColor='#787878'
                >
                <rect className={largeScreen} x='40' y='15' rx='20' ry='20' width='150' height='200' />

                <rect className={largeScreen} x='220' y='17' rx='10' ry='10' width='290' height='18' />

                <rect className={largeScreen} x='220' y='50' rx='10' ry='10' width='233' height='12' />

                <rect className={largeScreen} x='220' y='110' rx='5' ry='5' width='165' height='8' />
                <rect className={largeScreen} x='220' y='130' rx='5' ry='5' width='165' height='8' />

                <rect className={largeScreen} x='220' y='180' rx='8' ry='8' width='100' height='29' />
                <rect className={largeScreen} x='550' y='15' rx='20' ry='20' width='220' height='200' />

                <rect className={largeScreen} x='40' y='320' rx='5' ry='5' width='45' height='35' />
                <rect className={largeScreen} x='100' y='320' rx='5' ry='5' width='45' height='35' />
                <rect className={largeScreen} x='160' y='320' rx='5' ry='5' width='45' height='35' />
                <rect className={largeScreen} x='220' y='320' rx='5' ry='5' width='45' height='35' />

                {/* small screen */}

                <rect className={smallScreen} x='200' y='15' rx='20' ry='20' width='150' height='200' />
                <rect className={smallScreen} x='630' y='17' rx='2' ry='2' width='20' height='18' />
                <rect className={smallScreen} x='400' y='17' rx='10' ry='10' width='170' height='16' />
                <rect className={smallScreen} x='400' y='50' rx='10' ry='10' width='135' height='12' />
                <rect className={smallScreen} x='400' y='110' rx='5' ry='5' width='120' height='8' />
                <rect className={smallScreen} x='400' y='130' rx='5' ry='5' width='120' height='8' />
                <rect className={smallScreen} x='400' y='180' rx='8' ry='8' width='70' height='29' />

                <rect className={smallScreen} x='200' y='245' rx='20' ry='20' width='150' height='200' />
                <rect className={smallScreen} x='630' y='247' rx='2' ry='2' width='20' height='18' />
                <rect className={smallScreen} x='400' y='247' rx='10' ry='10' width='170' height='16' />
                <rect className={smallScreen} x='400' y='280' rx='10' ry='10' width='135' height='12' />
                <rect className={smallScreen} x='400' y='340' rx='5' ry='5' width='120' height='8' />
                <rect className={smallScreen} x='400' y='380' rx='5' ry='5' width='120' height='8' />
                <rect className={smallScreen} x='400' y='410' rx='8' ry='8' width='70' height='29' />

                <rect className={smallScreen} x='200' y='550' rx='5' ry='5' width='60' height='35' />
                <rect className={smallScreen} x='280' y='550' rx='5' ry='5' width='60' height='35' />
                <rect className={smallScreen} x='360' y='550' rx='5' ry='5' width='60' height='35' />
                <rect className={smallScreen} x='440' y='550' rx='5' ry='5' width='60' height='35' />

                <rect className={smallScreen} x='200' y='650' rx='20' ry='20' width='450' height='200' />
            </ContentLoader>
        </div>)
    }
}

FullCartLoader.propTypes = {
}

FullCartLoader.defaultProps = {
}

export default ComponentInjector.return('FullCartLoader', FullCartLoader)
