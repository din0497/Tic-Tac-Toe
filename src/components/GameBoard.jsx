import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({onSelectSquare, turns} ) {
let gameBoard = initialGameBoard;

for(const turn of turns ) {
    const {square, player} = turn
    const {row, col} = square

    gameBoard[row][col] = player
}

//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function handleSelectSquare(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) => {
//       const updatedBoard = [
//         ...prevGameBoard.map((innerArray) => [...innerArray]),
//       ];
//       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//       return updatedBoard;
//     });

//     onSelectSquare()
//   }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowindex) => (
        <li key={rowindex}>
          <ol>
            {row.map((col, colindex) => (
              <li key={colindex}>
                <button
                  disabled={col !== null}
                  onClick={() => {
                    onSelectSquare(rowindex, colindex);
                  }}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
