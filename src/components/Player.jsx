import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    
    let editablePlayerName = <span className="player-name">{playerName}</span>;
   

    if(isEditing){
        editablePlayerName = <input type="text" required onChange={handleChange} value={playerName} className="player-edit"/>;
    }

    function handleEditClick() {
        setIsEditing((isEditing) => !isEditing);
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }


    return (
        <li className={isActive ? 'active' : ''}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing? 'Save': 'Edit'}</button>
        </li>
    );
}