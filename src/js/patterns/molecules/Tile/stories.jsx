import React from 'react'

import Tile from 'Molecules/Tile'
import image from './stories/image'
import tastic from './stories/tastic'
import context from './stories/context'
import topic from './stories/topic'
import title from './stories/title'
import buttonLabel from './stories/buttonLabel'
import reference from './stories/reference'

export default {
    title: 'Tile',
}

export const tile = () => {
  tastic.schema.get = function() {
    return null
  }

    return (
        <div>
            <Tile 
              image={image}
              tastic={tastic}
              context={context}
              topic={topic}
              title={title}
              verticalPosition={'middle'}
              horizontalPosition={'left'}
              buttonLabel={buttonLabel}
              reference={reference}
              isClickable={false}
            />
        </div>
    )
}

tile.story = {
    name: 'Tile',
}
