import React, { useState } from 'react';
import { useService } from '../../hooks/useService';
import { getChampionList } from '../../services/championService';
import './championScrollBar.css';

function ChampionScrollBar() {
  const championList: any = useService(getChampionList).data

  return (
    <>
      {
        <div className='icon-container'>
          {
            championList && championList.map((champ: any, index: React.Key) => {return <div key={index}><img width={125} height={125} src={`http://ddragon.leagueoflegends.com/cdn/12.20.1/img/champion/${champ.id}.png`} /></div>})
          }
        </div>
      }
    </>
  );
}

export default ChampionScrollBar;

