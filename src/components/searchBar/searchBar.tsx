import { useContext, useState } from "react";
import { ChampionContext, ChampionListContext } from "../../App";
import { Champion } from "../../types/Champion";

export function SearchBar() {
    const [searchText, setSearchText] = useState<string>('Enter a champion name here...');
    const championContext = useContext(ChampionContext);
    const championList = useContext<Champion[]>(ChampionListContext);

    const searchForChampion = (searchText: string) => {
        const matchedChampion = championList.find(champion => champion.id.toLowerCase().includes(searchText.toLowerCase()));

        if (matchedChampion) {
            championContext.setSelectedChampion(matchedChampion.id)
        }
    }

    return (
        <div>
            <input type="text" placeholder="Enter a champion name here..." onChange={(e) => { setSearchText(e.currentTarget.value); }}></input>
            <button onClick={() => { searchForChampion(searchText) }} ></button>
        </div>
    );
}