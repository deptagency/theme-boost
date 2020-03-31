import React from 'react'

import Tile from 'Molecules/Tile'
import Context from '@frontastic/catwalk/src/js/app/context'

export default {
    title: 'Tile',
}

export const tile = () => {
    const image = {
            "media": {
              "_type": "Frontastic\\Backstage\\MediaApiBundle\\Domain\\MediaApi\\Media",
              "mediaId": "sfup2px2fcraddv1cb24",
              "name": "Tyler-nix-BQrxXytYaHI-unsplash",
              "tags": [
                "Jacket",
                "Mens"
              ],
              "file": "https://res.cloudinary.com/dlwdq84ig/image/upload/v1583133271/sfup2px2fcraddv1cb24.jpg",
              "size": 1686720,
              "width": 3840,
              "height": 5760,
              "format": "jpg",
              "created": "2020-03-02T07:14:31+00:00",
              "metaData": "_FILTERED_"
            },
            "title": {
              "en_GB@EUR": "Fashion Men"
            },
            "ratio": "16:9"
    }

    return (
        <div>
            <Tile 
            titleImage={image}
            tastic={tastic}
            context={context}
            topic={topic}
            title={title}
            verticalPosition={'bottom'}
            horizontalPosition={'left'}
            buttonLabel={buttonLabel}
            tileReference={tileReference}
            wholeTileClickable={false}
            />
        </div>
    )
}

tile.story = {
    name: 'Tile',
}
