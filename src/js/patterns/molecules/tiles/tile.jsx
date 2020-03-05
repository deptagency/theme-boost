import React from 'react'
import PropTypes from 'prop-types'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import Image from '@frontastic/catwalk/src/js/image'
import Button from '../../atoms/buttons/button'
import classnames from 'classnames'

const Tile = ({ tileImage, topic, title, verticalPosition, horizontalPosition, buttonText, buttonLink, wholeTileClickable }) => {
    if (!tileImage || !tileImage.media) {
        return null
    }

    const selfAlign = {
        'self-start': horizontalPosition === 'left',
        'self-center': horizontalPosition === 'center',
        'self-end': horizontalPosition === 'right',
    }

    const justifyContent = {
        'justify-start': verticalPosition === 'top',
        'justify-center': verticalPosition === 'middle',
        'justify-end': verticalPosition === 'bottom',
    }

    return (
        <div className='aspectRatioPromobox relative mr-4'>
            <Image
                media={tileImage.media}
                alt={<Translatable value={tileImage.media.title} />}
                className='aspectRatioPromoboxInside lock h-full w-full top-0 left-0 absolute opacity-75 rounded-md'
            />
            <div className='h-full w-full'>
                <div
                    className={classnames({
                        'flex flex-col absolute rounded-lg md:p-8 p-4 ': true,
                        'items-center top-0 bottom-0': verticalPosition === 'middle',
                        'justify-center left-0 right-0': horizontalPosition === 'center',
                        [`text-${horizontalPosition}`]: true,
                        [`${verticalPosition}-0 ${horizontalPosition}-0`]: true,
                        ...justifyContent,
                    })}
                >

                    <p
                        className={classnames({
                            'text-xl text-white sm:text-2xl md:text-3xl mb-2': true,
                            ...selfAlign,
                        })}
                    >
                        <Translatable value={topic} />
                    </p>
                    <h1
                        className={classnames({
                            'text-5xl text-white md:text-6xl font-bold mb-2 leading-tight': true,
                            ...selfAlign,
                        })}
                    >
                        <Translatable value={title} />
                    </h1>

                    {/* // TODO Implement reference properly */}
                    <Button
                        // component='a'
                        // href={buttonLink.target} {/* primary BUTTON */}
                        className={classnames({
                            'bg-indigo-500 font-semibold hover:bg-indigo-700 text-2xl py-4 px-6 rounded-lg': true,
                            ...selfAlign,
                        })}

                    >
                        <Translatable value={buttonText} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

Tile.propTypes = {
    tileImage: PropTypes.object.isRequired,
    topic: PropTypes.object.isRequired,
    title: PropTypes.object.isRequired,
    verticalPosition: PropTypes.object.isRequired,
    horizontalPosition: PropTypes.object.isRequired,
    buttonText: PropTypes.object.isRequired,
    buttonLink: PropTypes.object.isRequired,
    wholeTileClickable: PropTypes.object.isRequired,
}

export default Tile
