import React from 'react';
import { useService } from '../../hooks/useService';
import { getChampionList } from '../../services/championService';
import { ChampionIcon } from '../championIcon/championIcon';
import './championScrollBar.css';

function ChampionScrollBar() {
  const championList: any = useService(getChampionList).data

  return (
        <div className='icon-container'>
          {
            championList && championList.map((champion: any, index: React.Key) => {return <ChampionIcon championId={champion.id} index={index}/>})
          }
        </div>
  );
}

export default ChampionScrollBar;

