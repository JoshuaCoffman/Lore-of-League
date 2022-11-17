import React, { useContext } from 'react';
import { ChampionListContext } from '../../App';
import { Champion } from '../../types/Champion';

import { ChampionIcon } from '../championIcon/championIcon';
import './championScrollBar.css';

function ChampionScrollBar() {
  const championContext = useContext<Champion[]>(ChampionListContext);

  return (
    <div className='icon-container'>
      {
        championContext && championContext.map((champion: Champion) => { return <ChampionIcon championId={champion.id} key={champion.key} /> })
      }
    </div>
  );
}

export default ChampionScrollBar;

