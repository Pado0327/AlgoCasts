// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // find prime value -- 2n - 1
  //find middle value -- m.
  // interate based on paramter (n)
  // set min and max based on middle (+-index - 1)
  // interate based on prime value
  // if(min <= index <= max)  += #
  // else += ' ';

  const prime = 2 * n - 1;
  const medium = Math.ceil(prime / 2);
  let pyramid = '';

  for (let i = 0; i < n; i++) {
    let min = medium - i;
    let max = medium + i;

    for (let j = 0; j < prime; j++) {
      if (min <= j && j <= max) {
        pyramid += '#';
      } else {
        pyramid += ' ';
      }
    }

    console.log(pyramid);
  }
}

module.exports = pyramid;
