import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import ContentLoader from 'react-content-loader'
import { smallScreen, largeScreen } from './loaders.module.scss'

class ProductLoader extends Component {
    render () {
        return (<div>
            <ContentLoader
                height={900}
                width={800}
                speed={2}
                primaryColor='#d9d9d9'
                secondaryColor='#787878'
            >
                <rect className={largeScreen} x='54' y='18' rx='20' ry='20' width='346' height='250' />   
                <rect className={largeScreen} x='450' y='300' rx='5' ry='5' width='220' height='10' />  
                <rect className={largeScreen} x='450' y='18' rx='10' ry='10' width='300' height='35' />
                <rect className={largeScreen} x='450' y='62' rx='10' ry='10' width='300' height='6' />    
                <rect className={largeScreen} x='450' y='72' rx='10' ry='10' width='300' height='6' />    
                <rect className={largeScreen} x='450' y='82' rx='10' ry='10' width='300' height='6' />    
                <rect className={largeScreen} x='450' y='110' rx='10' ry='10' width='50' height='60' />    
                <rect className={largeScreen} x='530' y='110' rx='10' ry='10' width='50' height='60' />    
                <rect className={largeScreen} x='610' y='110' rx='10' ry='10' width='50' height='60' />    
                <rect className={largeScreen} x='450' y='185' rx='10' ry='10' width='300' height='35' />    
                <rect className={largeScreen} x='450' y='240' rx='10' ry='10' width='240' height='40' />
                <rect className={largeScreen} x='710' y='240' rx='10' ry='10' width='40' height='40' />

                {/* small screen */}

                <rect className={smallScreen} x='30' y='18' rx='20' ry='20' width='740' height='500' />   

                <rect className={smallScreen} x='30' y='565' rx='10' ry='10' width='360' height='40' />    
                <rect className={smallScreen} x='630' y='565' rx='10' ry='10' width='130' height='40' /> 

                <rect className={smallScreen} x='30' y='620' rx='10' ry='10' width='180' height='20' />   
                <rect className={smallScreen} x='30' y='660' rx='10' ry='10' width='180' height='20' />   
                
                <rect className={smallScreen} x='30' y='760' rx='10' ry='10' width='100' height='40' />
                <rect className={smallScreen} x='30' y='820' rx='10' ry='10' width='140' height='45' />
            </ContentLoader>
        </div>)
    }
}

ProductLoader.propTypes = {
}

ProductLoader.defaultProps = {
}

export default ComponentInjector.return('ProductLoader', ProductLoader)
