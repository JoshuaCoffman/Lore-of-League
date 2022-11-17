import React from 'react';
import { useState } from 'react';
import './App.css';
import ChampionScrollBar from './components/championScrollBar/championScrollBar';
import { ChampionView } from './components/championView/championView';
import { useService } from './hooks/useService';
import { getChampionList } from './services/championService';
import { Champion } from './types/Champion';

interface contextProps {
  selectedChampion: string,
  setSelectedChampion: React.Dispatch<React.SetStateAction<string>>,
}
export const ChampionContext = React.createContext<contextProps>(null);
export const ChampionListContext: any = React.createContext<Champion[]>(null);

function App() {
  const [selectedChampion, setSelectedChampion] = useState("Aatrox")
  const championList: Champion[] = useService(getChampionList).data
  return (
    <div className="App">
      {championList && <ChampionListContext.Provider value={championList}>
        <ChampionContext.Provider value={{ selectedChampion, setSelectedChampion }}>
          <div className='scroll-bar-container'>
            <ChampionScrollBar></ChampionScrollBar>
          </div>
          <ChampionView selectedChampion={selectedChampion}></ChampionView>
        </ChampionContext.Provider>
      </ChampionListContext.Provider>
      }

    </div>
  );
}

export default App;
