import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import ContentLoader from 'react-content-loader'

import { smallScreen, largeScreen, blockSmallScreenHide } from './loaders.module.scss'

class HomepageLoader extends Component {
    render () {
        return (<div>
            <ContentLoader
                height={950}
                width={800}
                speed={2}
                primaryColor='#d9d9d9'
                secondaryColor='#787878'
                >
                <rect x='20' y='8' rx='7' ry='7' width='160' height='35' />
                <rect className={blockSmallScreenHide} x='330' y='8' rx='7' ry='7' width='140' height='35' />
                <rect x='620' y='8' rx='7' ry='7' width='160' height='35' />
                <rect className={blockSmallScreenHide} x='100' y='60' rx='4' ry='4' width='600' height='12' />

                <rect x='19' y='90' rx='7' ry='7' width='760' height='360' />

                <rect className={largeScreen} x="20" y="470" rx="7" ry="7" width="230" height="170" />
                <rect className={largeScreen} x="287" y="470" rx="7" ry="7" width="230" height="170" />
                <rect className={largeScreen} x="547" y="470" rx="7" ry="7" width="230" height="170" />

                <rect className={largeScreen} x='200' y='660' rx='4' ry='4' width='400' height='12' />
                <rect className={largeScreen} x='300' y='685' rx='4' ry='4' width='200' height='15' />

                <rect className={largeScreen} x='20' y='720' rx='7' ry='7' width='165' height='210' />
                <rect className={largeScreen} x='217' y='720' rx='7' ry='7' width='165' height='210' />
                <rect className={largeScreen} x='412' y='720' rx='7' ry='7' width='165' height='210' />
                <rect className={largeScreen} x='607' y='720' rx='7' ry='7' width='165' height='210' />

                {/* small screen */}

                <rect className={smallScreen} x="20" y="470" rx="7" ry="7" width="300" height="200" />
                <rect className={smallScreen} x="340" y="470" rx="7" ry="7" width="300" height="200" />
                <rect className={smallScreen} x="660" y="470" rx="7" ry="7" width="300" height="200" />
                
                <rect className={smallScreen} x='200' y='690' rx='4' ry='4' width='400' height='12' />
                <rect className={smallScreen} x='300' y='720' rx='4' ry='4' width='200' height='15' />

                <rect className={smallScreen} x='20' y='750' rx='7' ry='7' width='240' height='210' />
                <rect className={smallScreen} x='280' y='750' rx='7' ry='7' width='240' height='210' />
                <rect className={smallScreen} x='540' y='750' rx='7' ry='7' width='240' height='210' />
            </ContentLoader>
        </div>)
    }
}

HomepageLoader.propTypes = {
}

HomepageLoader.defaultProps = {
}

export default ComponentInjector.return('HomepageLoader', HomepageLoader)
