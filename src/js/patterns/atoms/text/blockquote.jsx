import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class AtomsBlockquote extends Component {
    render () {
        return (<div>
            <blockquote>
                <p>lorem ipsum dolores</p>
                <cite>Author</cite>
            </blockquote>
        </div>)
    }
}

AtomsBlockquote.propTypes = {
}

AtomsBlockquote.defaultProps = {
}

export default ComponentInjector.return('AtomsBlockquote', AtomsBlockquote)
