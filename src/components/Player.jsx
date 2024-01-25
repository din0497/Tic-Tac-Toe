import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPalyer] = useState(initialName);
  const [isEditing, setIsdEditing] = useState(false);
  function handleEditClick() {
    setIsdEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPalyer(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            onChange={handleChange}
            type="text"
            required
            value={playerName}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
