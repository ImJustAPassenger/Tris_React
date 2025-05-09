import { useState } from "react";
export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setName] = useState(name);
  const [isEditing, setEditing] = useState(false);
  let spanPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    spanPlayerName = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChange}
      />
    );
  }

  function handleEdit() {
    setEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleChange(event) {
    setName(() => event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {spanPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
