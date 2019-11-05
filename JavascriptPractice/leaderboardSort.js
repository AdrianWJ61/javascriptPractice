/**
 * See exercise here:
 * https://edabit.com/challenge/nTZqZmAkLrjRx9PcK
 * 
 * How to sort arrays: 
 * https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
 */


// let leaderboard = [
//     { name: "a", score: 100, reputation: 20 },
//     { name: "b", score: 90, reputation: 40 },
//     { name: "c", score: 115, reputation: 30 }
//   ];

let leaderboard = [
    { name: 'kdavet0', score: 8680, reputation: 3149 },
    { name: 'rollerearn1', score: 7127, reputation: 968 },
    { name: 'hcastel2', score: 8375, reputation: 1650 },
    { name: 'mslorach3', score: 8097, reputation: 1925 },
    { name: 'hseefus4', score: 5526, reputation: 1747 },
    { name: 'ddiggles5', score: 7519, reputation: 3433 },
    { name: 'estalman6', score: 8516, reputation: 755 },
    { name: 'eklemt7', score: 8487, reputation: 3289 },
    { name: 'eskitch8', score: 7762, reputation: 329 },
    { name: 'jroos9', score: 6288, reputation: 3043 },
  ];


function leaderboards(users) {
    const leaderboardTotalScore = users.map(arr => {
        const totalScoreArray = {};
        totalScoreArray.name = arr.name;
        totalScoreArray.score = arr.score;
        totalScoreArray.reputation = arr.reputation;
        totalScoreArray.totalscore = (arr.reputation * 2) + arr.score;
        return totalScoreArray;
    });
    
    const sortedByTotalScore = leaderboardTotalScore.sort(compareDescending);
    const leaderBoardSorted = sortedByTotalScore.map(arr => {
        const sortedArray = {};
        sortedArray.name = arr.name;
        sortedArray.score = arr.score;
        sortedArray.reputation = arr.reputation;
        return sortedArray;
    });
    console.log(leaderboardTotalScore);

    return leaderBoardSorted;
}; 

function compareDescending(a, b) {
    const totalscoreA = a.totalscore;
    const totalscoreB = b.totalscore; 
    let compare = 0;
    if (totalscoreA < totalscoreB) {
      compare = 1;
    } 
    else if (totalscoreA > totalscoreB) {
      compare = -1;
    }
    return compare;
  }
  
  console.log(leaderboards(leaderboard));
  console.log(leaderboard.length);


  // Simple solution:
//   function leaderboards(users) {
// 	return users.sort((a,b) => (b.score + (b.reputation*2)) - (a.score + (a.reputation*2)))
// }