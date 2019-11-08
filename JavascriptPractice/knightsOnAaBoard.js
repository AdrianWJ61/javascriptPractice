"use strict";

/**
 * edabit challenge:  https://edabit.com/challenge/YFkyAh5sm9Guqth85
 * 
 * Write a function that returns true if the knights are placed on a chessboard 
 * such that no knight can capture another knight. Here, 0s represent empty 
 * squares and 1s represent knights.
 * 
 */

    
function cannotCapture(board) {
    // Check positions assuming board is always 8x8
    let checkKnightCanNotCapture = true;
    
    // Loop through each board position checking for a knight being present 
    for (let ky = 0; ky < 8; ky++){
        for (let kx = 0; kx < 8; kx++){
            if (board[ky][kx] == 1){
                let knightPosition = board[ky][kx];
    
                // Check the 8 possible move directions from current knight position to see if there is another knight there
                // First check if move position would be outside of the board area
                // Return 'false' if there is another knight at the move position
                for (let y = 1; y < 9; y++){
                    switch(y) {
                        case 1:                            
                            if (Math.sign(ky - 2) !== -1 && Math.sign(kx - 1) !== -1){
                                let moveToPosition1 = board[ky-2][kx-1];
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition1);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break;
                        case 2:
                            if (Math.sign(ky - 2) !== -1 && (kx + 1) < 8){
                                let moveToPosition2 = board[ky-2][kx+1];
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition2);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break;
                        case 3:
                            if (Math.sign(ky - 1) !== -1 && (kx + 2) < 8){
                                let moveToPosition3 = board[ky-1][kx+2];
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition3);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break;
                        case 4:
                            if ((ky + 1) < 8 && (kx + 2) < 8){
                                let moveToPosition4 = board[ky+1][kx+2];
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition4);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break;
                        case 5:
                            if ((ky + 2) < 8 && (kx + 1) < 8){
                                let moveToPosition5 = board[ky+2][kx+1];
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition5);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break;
                        case 6:
                            if ((ky + 2) < 8 && Math.sign(kx - 1) !== -1){
                                let moveToPosition6 = board[ky+2][kx-1];
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition6);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break;
                        case 7:
                            if ((ky + 1) < 8 && Math.sign(kx - 2) !== -1){ 
                                let moveToPosition7 = board[ky+1][kx-2];
                                checkKnightCanNotCapture = (knightPosition !== moveToPosition7);
                                if (checkKnightCanNotCapture == false){
                                    return checkKnightCanNotCapture;
                                }                                
                            }
                            break; 
                        case 8:
                            if (Math.sign(ky - 1) !== -1 && Math.sign(kx - 2) !== -1){
                                let moveToPosition8 = board[ky-1][kx-2];
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


// Run tests cases
for (let test = 1; test < 12; test++){
    let cannotCapturePositions;
    switch(test){
        case 1:
            // Can not capture - true
            cannotCapturePositions = [
                [0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 1, 0, 1, 0],
                [0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 1, 0, 0, 0]
                ];
            break;
        case 2:
            // Can not capture - true
            cannotCapturePositions = [
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [0, 0, 1, 0, 1, 0, 1, 0],
                [0, 0, 0, 1, 0, 1, 0, 1],
                [0, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 0, 0, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1]
                ];
            break;
        case 3:
            // Can not capture - true
            cannotCapturePositions = [
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0],
                [1, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 1, 0],
                [1, 0, 0, 0, 0, 0, 0, 1]
                ];
            break;
        case 4:  
            // Can not capture - true
            cannotCapturePositions = [
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 0, 1, 0, 1, 0, 1]
                ];
            break;
        case 5:   
            // Can not capture - true
            cannotCapturePositions = [
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 0, 0, 1, 0, 0, 0, 1]
                ];
            break;
        case 6:
            // Can capture - false
            cannotCapturePositions = [
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [1, 0, 0, 1, 0, 0, 0, 1]
                ];
            break;
        case 7:
            // Can capture - false
            cannotCapturePositions = [
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 0, 0, 1, 0, 0, 0, 1]
                ];
            break;
        case 8:
            // Can capture - false
            cannotCapturePositions = [
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [0, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 1, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 0, 1, 0, 1, 0, 1]
                ];
        break;
        case 9:  
            // Can capture - false
            cannotCapturePositions = [
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [0, 0, 0, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 0, 1, 0, 1, 0, 1]
                ];
            break;
        case 10:   
            // Can capture - false
            cannotCapturePositions = [
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [0, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0],
                [0, 0, 1, 1, 0, 1, 0, 1]
                ];
            break;
        case 11:   
            // Can capture - false
            cannotCapturePositions = [
                [0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 1, 0, 1, 0],
                [0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 1, 0, 0, 0]
                ];
            break;
        }
    console.log(`Test Case ${test} - knights can not capture knights = ${cannotCapture(cannotCapturePositions)}`);
}