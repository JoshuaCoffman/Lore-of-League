import React, { useContext } from "react";
import { ChampionContext } from "../../App";

interface IconProps {
    championId: string,
    index: React.Key,
}

export function ChampionIcon(props: IconProps) {
    const { championId, index } = props
    const championContext = useContext(ChampionContext);

    return (
        <div key={index}><img onClick={()=>{championContext.setSelectedChampion(championId)}} width={125} height={125} src={`http://ddragon.leagueoflegends.com/cdn/12.20.1/img/champion/${championId}.png`} alt="Champion Sprite" /></div>
    )
}