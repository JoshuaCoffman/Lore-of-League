import React from "react";

interface IconProps {
    championId: string,
    index: React.Key,
}

export function ChampionIcon(props: IconProps) {
    const { championId, index } = props

    return (
        <div key={index}><img onClick={()=>{}} width={125} height={125} src={`http://ddragon.leagueoflegends.com/cdn/12.20.1/img/champion/${championId}.png`} alt="Champion Sprite" /></div>
    )
}