// We don't need to worry about translating the element
// strings in this file since this is mainly a demo

import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TotalProps } from '../src/components/Total';
import { Totals } from '../src/components/Totals';
import { object } from '@storybook/addon-knobs';

const styles = StyleSheet.create({
  style: {
    padding: 20,
  },
  zipCode: {
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
});

const valueContent = (
  <TouchableOpacity onPress={action('Totals Shipping onPress')}>
    <Text style={styles.zipCode}>Enter Zip Code</Text>
  </TouchableOpacity>
);

const totals: TotalProps[] = [
  {
    keyName: 'Subtotal',
    value: '$19.05',
  },
  {
    keyName: 'Tax (7%)',
    value: '$1.33',
  },
  {
    keyName: 'Shipping',
    value: valueContent,
  },
  {
    keyName: 'Total',
    keyStyle: {
      fontWeight: 'bold',
    },
    value: '$20.38',
    valueStyle: {
      fontWeight: 'bold',
    },
    style: {
      borderTopWidth: StyleSheet.hairlineWidth,
    },
  },
];

const style = {
  padding: 20,
  borderWidth: 1,
};

storiesOf('Totals', module).add('basic usage', () => (
  <Totals totals={totals} style={object('containerStyle', style)} />
));
