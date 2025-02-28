import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';
import { Grid } from '../src/components/Grid';
import { CommerceTypes } from '@brandingbrand/fscommerce';
import { ProductItem } from '../src/components/ProductItem';
import { Shelf } from '../src/components/Shelf';
import Decimal from 'decimal.js';

import { CoreContentManagementSystemProvider } from '@brandingbrand/fsengage';

import greyBox from './assets/images/greyBox.png';

const provider = new CoreContentManagementSystemProvider({
  propertyId: '443',
  environment: 1,
});

const defaultStyle = {
  padding: 15,
  font: 8,
  textAlign: 'center',
};

const kActionOnPress = 'ProductItemVerticalList onPress';

const testProduct: CommerceTypes.Product = {
  id: '101',
  brand: 'Brand',
  title: 'Product',
  price: {
    value: new Decimal('9.99'),
    currencyCode: 'USD',
  },
  originalPrice: {
    value: new Decimal('14.99'),
    currencyCode: 'USD',
  },
  images: [{ uri: greyBox }],
  review: {
    id: '101',
    statistics: {
      id: '101',
      averageRating: 4.5,
      reviewCount: 20,
    },
    reviews: [],
  },
  promotions: ['This is a sample promotion!'],
};

const renderProduct = (): JSX.Element => {
  return (
    <ProductItem
      {...object('Product', testProduct)}
      style={object('style', defaultStyle)}
      onPress={action(kActionOnPress)}
    />
  );
};

storiesOf('Shelf', module).add('basic usage', () => (
  <Shelf provider={provider} group="Shop" identifier="Banner-Carousel" carouselHeight={100}>
    <Grid data={[...Array(4).keys()]} columns={2} renderItem={renderProduct} />
  </Shelf>
));
