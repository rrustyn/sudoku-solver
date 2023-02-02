//function that takes locations marking all cells in the same row and column 
// as false
//returns 9x9 moolean matrix
//
/**
 * filters each number by taking all known locations of a number and setting the
 *  crosses to false
 * locations is an array of [row,column] coords
 * input [[row,col],...] array of number locations
 * output 9x9 grid with all crosses centered at location set to false
*/
function numberFilter(locations) {
  const filter = Array.from({ length: 9 }, x => Array.from({ length: 9 }, x => true));

  for (let location of locations) {
    let [row, column] = location;

    for (let i = 0; i < filter.length; i++) {
      filter[i][column] = false;
    }

    filter[row].fill(false);
  }

  return filter;
}

function markLocations(grid, number) {
  const locations = [];

  for (let row = 0; row < grid.length; row++) {
    if (grid[row].includes(number)) {
      let column = grid[row].indexOf(number);
      locations.push([row, column]);
    }
  }

  return locations;
}

module.exports = { numberFilter, markLocations };