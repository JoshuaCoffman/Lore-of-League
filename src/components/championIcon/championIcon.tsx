import React, { useContext } from "react";
import { ChampionContext } from "../../App";

interface IconProps {
    championId: string,
}

export function ChampionIcon(props: IconProps) {
    const { championId } = props
    const championContext = useContext(ChampionContext);

    return (
        <div><img onClick={() => { championContext.setSelectedChampion(championId) }} width={125} height={125} src={`http://ddragon.leagueoflegends.com/cdn/12.20.1/img/champion/${championId}.png`} alt="Champion Sprite" /></div>
    )
}