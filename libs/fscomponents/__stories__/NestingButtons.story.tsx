import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import { NestingButtons } from '../src/components/NestingButtons';

const onPress = (index: number) => () => console.log(`Button ${index} pressed.`);
const generateButtons = (num: number) => {
  return new Array(num).fill(null).map((n, index) => ({
    title: `Button ${index}`,
    onPress: onPress(index),
  }));
};

storiesOf('NestingButtons', module).add('basic usage', () => (
  <NestingButtons
    showMoreTitle={text('Show More Title', 'Checkout Options')}
    maxCount={number('Max Number of Buttons', 3)}
    buttonsProps={generateButtons(number('Number of Buttons', 5))}
    modalTitle={text('Modal Header Text', 'Modal Header')}
  />
));
