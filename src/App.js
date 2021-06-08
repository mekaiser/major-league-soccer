import { useEffect, useState } from "react";
import "./App.css";
import Player from "./components/Player/Player";
import Selection from "./components/Selection/Selection";
import playerData from "./data/playerData.json";

function App() {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(playerData);
  }, []);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const handleSelection = (player) => {
    const newSelectedPlayer = [...selectedPlayer, player]
    setSelectedPlayer(newSelectedPlayer);
  }
  return (
    <div>
      <header>
        <h1 class="title">Major League Soccer</h1>
      </header>
      <main>
        <div class="all-players">
          <div class="card-container">
            <div class="card-style-div">
              {player.map((playerInfo) => (
                <Player player={playerInfo} selectionHandler = {handleSelection} key={playerInfo.id}></Player>
              ))}
            </div>
          </div>
          <div class="selection-style">
            <Selection selectedPlayer = {selectedPlayer}></Selection>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
