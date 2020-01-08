import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import ContentLoader from 'react-content-loader'

class HomepageLoader extends Component {
    render () {
        return (<div>
           <ContentLoader
                height={950}
                width={800}
                speed={2}
                primaryColor="#d9d9d9"
                secondaryColor="#787878"
                >
                <rect x="20" y="8" rx="7" ry="7" width="160" height="35" />
                <rect x="330" y="8" rx="7" ry="7" width="140" height="35" />
                <rect x="620" y="8" rx="7" ry="7" width="160" height="35" />
                <rect x="100" y="60" rx="4" ry="4" width="600" height="12" />

                <rect x="19" y="90" rx="7" ry="7" width="760" height="360" />

                <rect x="20" y="470" rx="7" ry="7" width="230" height="170" />
                <rect x="287" y="470" rx="7" ry="7" width="230" height="170" />
                <rect x="547" y="470" rx="7" ry="7" width="230" height="170" />

                <rect x="200" y="660" rx="4" ry="4" width="400" height="12" />
                <rect x="300" y="685" rx="4" ry="4" width="200" height="15" />

                <rect x="20" y="720" rx="7" ry="7" width="165" height="210" />
                <rect x="217" y="720" rx="7" ry="7" width="165" height="210" />
                <rect x="412" y="720" rx="7" ry="7" width="165" height="210" />
                <rect x="607" y="720" rx="7" ry="7" width="165" height="210" />

            </ContentLoader>
        </div>)
    }
}

HomepageLoader.propTypes = {
}

HomepageLoader.defaultProps = {
}

export default ComponentInjector.return('HomepageLoader', HomepageLoader)
