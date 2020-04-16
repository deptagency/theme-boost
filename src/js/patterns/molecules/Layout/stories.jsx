import React from 'react'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

export default {
    title: 'Cart-like layout',
}

export const tile = () => {
    return (
        <StickyRightColumn
            variant='max-w-960px m-auto my-5 px-5'
            leftColumn={
                <div className='shadow rounded bg-gray-200'>
                    <p className='m-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='mx-2 my-8'>Aliquam tortor ante, ultrices vel suscipit nec, tincidunt faucibus est.</p>
                    <p className='mx-2 my-8'><ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Donec in mauris ac odio molestie suscipit.</li>
                        <li>Nam ut sem commodo, accumsan metus in, dapibus lectus.</li>
                        <li>Phasellus quis risus semper, condimentum nulla gravida, semper velit.</li>
                        <li>Ut eu elit eget lacus feugiat mattis et eget augue.</li>
                    </ul></p>
                    <p className='mx-2 my-8'><ul>
                        <li>Nulla blandit velit quis bibendum tincidunt.</li>
                    </ul></p>
                    <p className='mx-2 my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='mx-2 my-8'>Aliquam tortor ante, ultrices vel suscipit nec, tincidunt faucibus est.</p>
                    <p className='mx-2 my-8'><ul>
                        <li>Vestibulum non dui sed orci efficitur convallis ut ac urna.</li>
                        <li>In maximus nunc sit amet velit venenatis convallis.</li>
                        <li>Cras elementum ipsum sit amet eros malesuada, sed dapibus massa ullamcorper.</li>
                        <li>Maecenas molestie nulla ac nibh tincidunt laoreet.</li>
                        <li>Morbi vel erat in turpis ultrices vehicula a eget magna.</li>
                    </ul></p>
                    <p className='mx-2 my-8'>Aliquam tortor ante, ultrices vel suscipit nec, tincidunt faucibus est.</p>
                    <p className='mx-2 my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='mx-2 my-8'><ul>
                        <li>In dignissim quam quis purus hendrerit dapibus.</li>
                        <li>Mauris et tellus malesuada, viverra felis id, tincidunt mauris.</li>
                        <li>Fusce a sem id risus rutrum consequat in eu ipsum.</li>
                    </ul></p>
                    <p className='mx-2 my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='mx-2 my-8'>Aliquam tortor ante, ultrices vel suscipit nec, tincidunt faucibus est.</p>
                    <p className='m-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                }
            rightColumn={
                <div className='shadow rounded bg-gray-500 h-fix-240px' />
            }
        />
    )
}

tile.story = { name: 'Sticky right column' }
