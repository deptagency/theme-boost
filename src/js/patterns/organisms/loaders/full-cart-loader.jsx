import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import ContentLoader from 'react-content-loader'

class FullCartLoader extends Component {
    render () {
        return (<div>
           <ContentLoader
                height={400}
                width={800}
                speed={2}
                primaryColor="#d9d9d9"
                secondaryColor="#787878"
                >
                <rect x="40" y="15" rx="20" ry="20" width="150" height="200" />
                <rect x="40" y="320" rx="5" ry="5" width="45" height="35" />
                <rect x="100" y="320" rx="5" ry="5" width="45" height="35" />
                <rect x="160" y="320" rx="5" ry="5" width="45" height="35" />
                <rect x="220" y="320" rx="5" ry="5" width="45" height="35" />
                <rect x="220" y="17" rx="10" ry="10" width="290" height="18" />
                <rect x="220" y="50" rx="10" ry="10" width="233" height="12" />
                <rect x="220" y="110" rx="5" ry="5" width="165" height="8" />
                <rect x="220" y="130" rx="5" ry="5" width="165" height="8" />
                <rect x="220" y="180" rx="8" ry="8" width="100" height="29" />
                <rect x="550" y="15" rx="20" ry="20" width="220" height="200" />

            </ContentLoader>
        </div>)
    }
}

FullCartLoader.propTypes = {
}

FullCartLoader.defaultProps = {
}

export default ComponentInjector.return('FullCartLoader', FullCartLoader)
