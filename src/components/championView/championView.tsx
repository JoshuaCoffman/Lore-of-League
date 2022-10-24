interface ChampionViewProps {
    selectedChampion: string,
}
export function ChampionView(props:ChampionViewProps) {
    const {selectedChampion} = props;
    return (
        <div>
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${selectedChampion}_0.jpg`} alt="Champion Splash"></img>
            <div>Champion Name Here</div>
        </div>
    )
}