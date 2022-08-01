import ARTISTS from '../Artists';
import shuffleArray from './shuffle';

describe('Select half-random 12 from ARTISTS', () => {
  test('it should shuffle the first 12 only', () => {
    let input = ARTISTS;

    let output = shuffleArray(ARTISTS);

    output.slice(0, 12).forEach(element => {
      if (!input.slice(0, 12).some(e => e.name === element.name)) {
        throw new Error('First 12 in input does not include element in output');
      };
    });
  });

  test('it should shuffle the remaining', () => {
    let input = ARTISTS;

    let output = shuffleArray(ARTISTS);

    output.slice(6, ARTISTS.length).forEach(element => {
      if (!input.slice(6, ARTISTS.length).some(e => e.name === element.name)) {
        throw new Error('Remaining input does not include element in output');
      };
    });
  })
});