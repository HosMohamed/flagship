import React from 'react';
import { FlatList } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, object, select, text } from '@storybook/addon-knobs';
import { CategoryBox } from '../src/components/CategoryBox';
import { CategoryLine } from '../src/components/CategoryLine';
import { Grid } from '../src/components/Grid';

import arrowRight from './assets/images/arrow-right.png';
import greyBox from './assets/images/greyBox.png';

const boxImageStyle = {
  width: 60,
  height: 60,
};

const defaultAccessoryStyle = {
  width: 30,
  height: 30,
};

const defaultStyle = {
  padding: 15,
};

const kActionOnPress = 'CategoryLine onPress';

const lineImageStyle = {
  width: 50,
  height: 50,
};

const renderCategoryBox = (): JSX.Element => {
  return (
    <CategoryBox
      id={'123'}
      title={text('title', 'Category')}
      style={object('style', defaultStyle)}
      onPress={action('CategoryBox onPress')}
      image={greyBox}
      showImage={boolean('thumbnail?', true)}
      imageStyle={object('imageStyle', boxImageStyle)}
    />
  );
};

const renderCategoryLine = (): JSX.Element => {
  return (
    <CategoryLine
      id={'123'}
      title={text('title', 'Category')}
      style={object('style', defaultStyle)}
      onPress={action(kActionOnPress)}
      image={greyBox}
      showImage={boolean('thumbnail?', true)}
      imageStyle={object('imageStyle', lineImageStyle)}
      showAccessory={boolean('accessory?', true)}
      accessorySrc={arrowRight}
      accessoryStyle={object('accessoryStyle', defaultAccessoryStyle)}
    />
  );
};

storiesOf('Category', module)
  .add('Category Box', () => (
    <Grid
      renderItem={renderCategoryBox}
      data={[...Array(6).keys()]}
      columns={select('number of columns', [1, 2, 3], 2)}
    />
  ))
  .add('Category Line', renderCategoryLine)
  .add('Category Line in FlatList', () => (
    <FlatList renderItem={renderCategoryLine} data={[1, 2, 3]} />
  ));
