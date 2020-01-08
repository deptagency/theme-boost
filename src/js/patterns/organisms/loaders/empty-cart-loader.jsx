import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
// import './product-loader.module.scss'
import ContentLoader from 'react-content-loader'

class EmptyCartLoader extends Component {
    render () {
        return (<div>
           <ContentLoader
                height={300}
                width={800}
                speed={2}
                primaryColor="#d9d9d9"
                secondaryColor="#ecebeb"
                >
                <rect x="375" y="35" rx="20" ry="20" width="100" height="90" />
                <rect x="345" y="145" rx="10" ry="10" width="160" height="25" />
                <rect x="300" y="185" rx="10" ry="10" width="250" height="18" />
                <rect x="300" y="220" rx="10" ry="10" width="255" height="50" />
               
               

            </ContentLoader>
        </div>)
    }
}

EmptyCartLoader.propTypes = {
}

EmptyCartLoader.defaultProps = {
}

export default ComponentInjector.return('EmptyCartLoader', EmptyCartLoader)
