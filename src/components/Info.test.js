import importAll from './Info';

describe("Image processing", () => {
  test("it should import all images into an object", () => {
    const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

    console.log(images);

    // expect().toEqual();

  });
});