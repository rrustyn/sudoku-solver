const { numberFilter, markLocations } = require("./helper");

test("numberFilter should return a 9x9 grid with row and columns matching locations set to false",
  () => {
    const locations1 = [[0, 0]];
    const answer1 = [
      [false, false, false, false, false, false, false, false, false,],
      [false, true, true, true, true, true, true, true, true,],
      [false, true, true, true, true, true, true, true, true,],
      [false, true, true, true, true, true, true, true, true,],
      [false, true, true, true, true, true, true, true, true,],
      [false, true, true, true, true, true, true, true, true,],
      [false, true, true, true, true, true, true, true, true,],
      [false, true, true, true, true, true, true, true, true,],
      [false, true, true, true, true, true, true, true, true,],
    ];
    // for (let i = 0; i< answer1.length; i++) {
    //   expect(numberFilter(locations1)[i]).toContainEqual(answer1[i]);
    // }
    expect(numberFilter(locations1)).toEqual(answer1);
      
    
    const locations2 = [[0, 0], [8, 8]];
    const answer2 = [
      [false, false, false, false, false, false, false, false, false,],
      [false, true, true, true, true, true, true, true, false,],
      [false, true, true, true, true, true, true, true, false,],
      [false, true, true, true, true, true, true, true, false,],
      [false, true, true, true, true, true, true, true, false,],
      [false, true, true, true, true, true, true, true, false,],
      [false, true, true, true, true, true, true, true, false,],
      [false, true, true, true, true, true, true, true, false,],
      [false, false, false, false, false, false, false, false, false,],
    ];
    // for (let i = 0; i< answer1.length; i++) { 
    //   expect(numberFilter(locations2)[i]).toContainEqual(answer2[i]);
    // }
    expect(numberFilter(locations2)).toEqual(answer2);
  });
  
  
  test("markLocations should return locations of number", () => {
    const grid1 = [
      [1, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    ];
    const grid2 = [
      [1, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 1,],
    ];
    const grid3 = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 1, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 7, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 1, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    ];
    
    expect(markLocations(grid1, 1)).toEqual([[0,0]]);
    expect(markLocations(grid2, 1)).toEqual([[0,0],[8,8]]);
    expect(markLocations(grid3, 1)).toEqual([[2,1],[7,7]]);
    expect(markLocations(grid3, 7)).toEqual([[4,4]]);
  });

