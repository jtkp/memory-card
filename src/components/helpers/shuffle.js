import ARTISTS from "../Artists";
// 0, 1, 2, 3
function shuffle(array, start, end) {
  let newArray = array;
  for (let i = end - 1; i > start; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function shuffleTwelve(array) {
  return shuffle(array, 0, 12);
}

function shuffleRemaining(array) {
  return shuffle(array, 6, ARTISTS.length);
}

function shuffleArray(array) {
  return shuffleTwelve(shuffleRemaining(shuffleTwelve(array)));
}

export default shuffleArray;