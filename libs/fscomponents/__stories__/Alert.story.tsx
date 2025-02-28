// We don't need to worry about translating the element
// strings in this file since this is mainly a demo

import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Button } from '../src/components/Button';
import { Alert } from '../src/components/Alert';
import { boolean, text } from '@storybook/addon-knobs';

const simpleAlert = () => {
  Alert.alert(text('title', 'simple alert'));
};

const titleAlert = () => {
  Alert.alert({
    title: text('title', 'Test Title'),
    text: text('text?', 'test text, test text.'),
  });
};

const confirmAlert = () => {
  Alert.alert({
    title: text('title', 'Are you sure?'),
    text: text('text?', 'You will not be able to recover this imaginary file!'),
    showCancelButton: boolean('showCancelButton?', true),
    cancelButtonText: text('cancelButtonText?', 'Cancel'),
    confirmButtonText: text('confirmButtonText?', 'Confirm'),
    onConfirm: action('Confirm'),
    onCancel: action('Cancel'),
  });
};

storiesOf('Alert', module)
  .add('simple', () => <Button onPress={simpleAlert} title="Preview Simple Alert" />)
  .add('w/ title', () => <Button onPress={titleAlert} title="Preview Title Alert" />)
  .add('w/ confirm', () => <Button onPress={confirmAlert} title="Preview Confirm Alert" />);
