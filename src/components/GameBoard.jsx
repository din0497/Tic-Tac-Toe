import { useState } from "react";


export default function GameBoard({onSelectSquare, board} ) {



  return (
    <ol id="game-board">
      {board.map((row, rowindex) => (
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
