import { useService } from "../../hooks/useService";
import { getChampionInfo } from "../../services/championService";
import './championView.css';

interface ChampionViewProps {
    selectedChampion: string,
}
export function ChampionView(props: ChampionViewProps) {
    const { selectedChampion } = props;
    let championInfo: any = useService(getChampionInfo, selectedChampion).data;

    return (
        <div className="view-container">
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${selectedChampion}_0.jpg`} alt="Champion Splash"></img>
            {championInfo &&
                <>
                    <div className="name-container">
                        <div className="name-rhombus"></div>
                        <div className="name">{championInfo[0].id}</div>

                        {/* <div className="lore-rhombus"></div> */}
                        {/* <div className="lore">Lore: {championInfo[0].lore}</div> */}
                    </div>
                    <div className="lore">Lore: {championInfo[0].lore}</div>
                </>
            }

        </div>
    )
}