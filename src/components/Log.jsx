export default function Log({turns}){
    return <ol id="log">
        {turns.length>0 && turns.map(({square:{row, col}, player}, turnIndex) => <li key={`${row}${col}`}>Player {player} chose square {row}, {col}</li>)}
    </ol>
}