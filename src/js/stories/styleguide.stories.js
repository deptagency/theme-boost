import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

storiesOf('5.Styleguide|Text', module)
  .add('Sizes', () => (
    <div>
      <p className='u-text-l'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quibusdam dignissimos. Fugit commodi earum mollitia iste illum repellendus, explicabo, odio recusandae, est rem dolorem consequuntur saepe reprehenderit ad perferendis dolorum.</p>
      <p className='u-text-m'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quibusdam dignissimos. Fugit commodi earum mollitia iste illum repellendus, explicabo, odio recusandae, est rem dolorem consequuntur saepe reprehenderit ad perferendis dolorum.</p>
      <p className='u-text-s'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quibusdam dignissimos. Fugit commodi earum mollitia iste illum repellendus, explicabo, odio recusandae, est rem dolorem consequuntur saepe reprehenderit ad perferendis dolorum.</p>
    </div>
  ))

storiesOf('5.Styleguide|Objects', module)
  .add('Lists', () => (
    <div>
      <h3 className='o-distance'>List Inline</h3>
      <ul className="o-list-inline">
        <li className="o-list-inline__item">Item</li>
        <li className="o-list-inline__item">Item</li>
        <li className="o-list-inline__item">Item</li>
      </ul>
      <h3 className='o-distance'>List Bare</h3>
      <ul className="o-list-bare">
        <li className="o-list-bare__item">Item</li>
        <li className="o-list-bare__item">Item</li>
        <li className="o-list-bare__item">Item</li>
      </ul>
      <h3 className='o-distance'>List Divided</h3>
      <ul className="o-list-bare">
        <li className="o-list-bare__item">Item</li>
        <li className="o-list-bare__item" aria-hidden="true"><span className="c-divider"></span></li>
        <li className="o-list-bare__item">Item</li>
        <li className="o-list-bare__item" aria-hidden="true"><span className="c-divider"></span></li>
        <li className="o-list-bare__item">Item</li>
        <li className="o-list-bare__item" aria-hidden="true"><span className="c-divider"></span></li>
      </ul>
    </div>
  ))

storiesOf('5.Styleguide|Objects', module)
  .add('Head Up', () => (
    <div>
      <div className='o-head-up' style={{minHeight: '200px', border: '2px solid'}}>
        <p className='o-head-up__item o-head-up__item--bottom-left'>Bottom Left</p>
        <p className='o-head-up__item o-head-up__item--bottom-right'>Bottom Right</p>
        <p className='o-head-up__item o-head-up__item--middle'>Middle</p>
        <p className='o-head-up__item o-head-up__item--top-left'>Top Left</p>
        <p className='o-head-up__item o-head-up__item--top-right'>Top Right</p>
      </div>
    </div>
  ))

storiesOf('5.Styleguide|Aspect Ratios', module)
  .addDecorator(storyFn => <div style={{ border: '3px solid #666' }}>{storyFn()}</div>)
  .add('16x9', () => (
    <div>
      <div className='u-aspect-ratio-16x9'>16x9</div>
    </div>
  ))
  .add('21x9', () => (
    <div>
      <div className='u-aspect-ratio-21x9'>21x9</div>
    </div>
  ))
  .add('4x3', () => (
    <div>
      <div className='u-aspect-ratio-4x3'>4x3</div>
    </div>
  ))
  .add('1x1', () => (
    <div>
      <div className='u-aspect-ratio-1x1'>1x1</div>
    </div>
  ))

storiesOf('5.Styleguide|Themes', module)
  .add('Spotlight', () => (
    <div className='t-spotlight'>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nesciunt molestiae officiis asperiores amet eveniet voluptates voluptate libero vero dignissimos maxime, ad, soluta optio cum recusandae nam corporis dolores ut.</p>
    </div>
  ))
  .add('Quietlight', () => (
    <div>
      <div className='t-quietlight'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nesciunt molestiae officiis asperiores amet eveniet voluptates voluptate libero vero dignissimos maxime, ad, soluta optio cum recusandae nam corporis dolores ut.</p>
      </div>
     </div>
  ))
  .add('Text', () => (
    <div>
      <p className='t-text-quiet'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quibusdam dignissimos. Fugit commodi earum mollitia iste illum repellendus, explicabo, odio recusandae, est rem dolorem consequuntur saepe reprehenderit ad perferendis dolorum.</p>
      <p className='t-text-ghost'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quibusdam dignissimos. Fugit commodi earum mollitia iste illum repellendus, explicabo, odio recusandae, est rem dolorem consequuntur saepe reprehenderit ad perferendis dolorum.</p>
      <p className='t-text-danger'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quibusdam dignissimos. Fugit commodi earum mollitia iste illum repellendus, explicabo, odio recusandae, est rem dolorem consequuntur saepe reprehenderit ad perferendis dolorum.</p>
    </div>
  ))