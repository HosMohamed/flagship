import targetInstancesByDate from '../src/modules/cms/providers/core/targets/targetInstancesByDate';

const fixture = require('./ContentManagementSystem.fixture.json');

describe('Core Content Management System Provider - Date Target', () => {
  test('Valid Date', (done) => {
    const instance = fixture.payload.data.Homepage['Hero-Carousel'].instances[0];
    const result = targetInstancesByDate([instance]);

    expect(result).toHaveLength(1);

    return done();
  });

  test('Invalid Date', (done) => {
    const instance = fixture.payload.data.Homepage['Hero-Carousel'].instances[1];
    const result = targetInstancesByDate([instance]);

    expect(result).toHaveLength(0);

    return done();
  });
});
