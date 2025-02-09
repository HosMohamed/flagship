import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import { ReviewIndicator } from '../src/components/ReviewIndicator';

storiesOf('ReviewIndicator', module).add('basic usage', () => (
  <ReviewIndicator
    value={number('value', 3.4)}
    itemSize={number('itemSize', 30)}
    itemColor={text('itemColor', 'yellow')}
    style={{ padding: 10 }}
  />
));
