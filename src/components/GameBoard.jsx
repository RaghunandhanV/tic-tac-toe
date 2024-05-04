import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex, event) {
        setGameBoard((prevGameBoard) => {
           // const updatedBoard = [...prevGameBoard.map((innerRowArray) => [...innerRowArray])];
            const updatedBoard = structuredClone(prevGameBoard);
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;    
        })
        event.target.disabled=true;
        onSelectSquare();


    }

    return(
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) =>
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={(event) => handleSelectSquare(rowIndex,colIndex, event)}>{playerSymbol}
                            </button>
                        </li>)}
                </ol>
            </li>)}
    </ol>);
}