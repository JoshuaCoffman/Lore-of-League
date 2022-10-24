import React from 'react';
import { useState } from 'react';
import './App.css';
import ChampionScrollBar from './components/championScrollBar/championScrollBar';
import { ChampionView } from './components/championView/championView';

interface contextProps {
  selectedChampion: string,
  setSelectedChampion: React.Dispatch<React.SetStateAction<string>>,
}
const ChampionContext = React.createContext<contextProps>(null);

function App() {
  const [selectedChampion, setSelectedChampion] = useState("Aatrox")
  return (
    <div className="App">
      <ChampionContext.Provider value={{selectedChampion, setSelectedChampion}}>
      <ChampionScrollBar></ChampionScrollBar>
      <ChampionView selectedChampion={selectedChampion}></ChampionView>
      </ChampionContext.Provider>
    </div>
  );
}

export default App;
