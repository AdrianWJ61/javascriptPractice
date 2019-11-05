/**
 * edabit Challenge:
 * https://edabit.com/challenge/YFkyAh5sm9Guqth85
 * 
 * Write a function that returns true if the knights are placed on a chessboard 
 * such that no knight can capture another knight. Here, 0s represent empty 
 * squares and 1s represent knights.
 * 
 */

 // Can not capture - true
//  let cannotCapturePositions = [
//     [0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 1, 0, 1, 0],
//     [0, 1, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 1, 0, 0, 0]
//   ];

   // Can capture - false
 let cannotCapturePositions = [
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 0, 1, 0, 1]
    ];

    
function cannotCapture(board) {
    // Check positions assuming board is always 8x8
    let checkKnightCanNotCapture = true;
    
    // Loop through each board position checking for a knight being present 
    for (ky = 0; ky < 8; ky++){
        for (kx = 0; kx < 8; kx++){
            if (board[ky][kx] == 1){
                let knightPosition = board[ky][kx];
                console.log("Knight's position true as is : " + knightPosition + " - Board position = " + "[ky = " + ky + " kx = " + kx + "]");

                // Check the 8 possible move directions from current knight position to see if there is another knight there
                // First check if move position would be outside of the board area
                // Return 'false' if there is another knight at the move position
                for (y = 1; y < 9; y++){
                    switch(y) {
                        case 1:                            
                            if (Math.sign(ky - 2) !== -1 && Math.sign(kx - 1) !== -1){
                                let moveToPosition1 = board[ky-2][kx-1];
                                console.log("Move to position1 = " + moveToPosition1 + " " + [ky-2] + " " + [kx-1]);                          
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition1);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break;
                        case 2:
                            if (Math.sign(ky - 2) !== -1 && (kx + 1) < 8){
                                let moveToPosition2 = board[ky-2][kx+1];
                                console.log("Move to position2 = " + moveToPosition2 + " " + [ky-2] + " " + [kx+1]);                            
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition2);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break;
                        case 3:
                            if (Math.sign(ky - 1) !== -1 && (kx + 2) < 8){
                                let moveToPosition3 = board[ky-1][kx+2];
                                console.log("Move to position3 = " + moveToPosition3 + " " + [ky-1] + " " + [kx+2]);                            
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition3);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break;
                        case 4:
                            if ((ky + 1) < 8 && (kx + 2) < 8){
                                let moveToPosition4 = board[ky+1][kx+2];
                                console.log("Move to position4 = " + moveToPosition4 + " " + [ky+1] + " " + [kx+2]);                            
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition4);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break;
                        case 5:
                            if ((ky + 2) < 8 && (kx + 1) < 8){
                                let moveToPosition5 = board[ky+2][kx+1];
                                console.log("Move to position5 = " + moveToPosition5 + " " + [ky+2] + " " + [kx+1]);                            
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition5);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break;
                        case 6:
                            if ((ky + 2) < 8 && Math.sign(kx - 1) !== -1){
                                let moveToPosition6 = board[ky+2][kx-1];
                                console.log("Move to position6 = " + moveToPosition6 + " " + [ky+2] + " " + [kx-1]);                            
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition6);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break;
                        case 7:
                            if ((ky + 1) < 8 && Math.sign(kx - 2) !== -1){ 
                                let moveToPosition7 = board[ky+1][kx-2];
                                console.log("Move to position7 = " + moveToPosition7 + " " + [ky+1] + " " + [kx-2]);                            
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition7);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break; 
                        case 8:
                            if (Math.sign(ky - 1) !== -1 && Math.sign(kx - 2) !== -1){
                                let moveToPosition8 = board[ky-1][kx-2];
                                console.log("Move to position8 = " + moveToPosition8 + " " + [ky-1] + " " + [kx-2]);                            
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition8);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                              
                            }
                            break;
                    }          
                }
            }
        }
    }  
    return checkKnightCanNotCapture;  
}

console.log(cannotCapture(cannotCapturePositions));



// Simple version:

// const safeAccess = (board, y, x) => (board[y] && board[y][x]) || 0;

// const getMoves = (board, y, x) => [
//   safeAccess(board, y - 2, x + 1),
//   safeAccess(board, y - 1, x + 2),
//   safeAccess(board, y + 1, x + 2),
//   safeAccess(board, y + 2, x + 1),
//   safeAccess(board, y + 2, x - 1),
//   safeAccess(board, y + 1, x - 2),
//   safeAccess(board, y - 1, x - 2),
//   safeAccess(board, y - 2, x - 1),
// ];

// const cannotCapture = board =>
//   !board.some((row, y) =>
//     row.some((cell, x) => cell && getMoves(board, y, x).includes(1))
//   );