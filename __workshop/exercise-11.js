function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the grid
  // there is either an "_" or a "#" character. The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  
  for (let add = 1; add < 9; add ++) {
    let line = "";
    if (add % 2 === 0) {
      for (let add = 1; add < 9; add ++) {
        if (add % 2 === 0) {
          line += "#";
        } else {
          line += "_";
        }
      }
    } else {
        for (let add = 1; add < 9; add ++) {
          if (add % 2 === 0) {
            line += "_";
          } else {
            line += "#";
          }
        }
    }
    console.log(line);
  }
  
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11

module.exports = exercise11;
