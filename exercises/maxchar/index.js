// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let countObject = {};
  for (const char of str) {
    // if (!countObjet.hasOwnProperty(char)) {
    //   countObjet[char] = 1;
    // } else {
    //   countObjet[char] = countObjet[char] + 1;
    // }
    countObject[char] = countObject[char] + 1 || 1;

    // 위에 거 말고도 countObject[char] = countObject[char] + 1 || 1;
  }
  let maxChar;
  let count = 0;
  for (const [key, value] of Object.entries(countObject)) {
    if (value > count) {
      maxChar = key;
      count = value;
    }
  }

  return maxChar;
}

module.exports = maxChar;
