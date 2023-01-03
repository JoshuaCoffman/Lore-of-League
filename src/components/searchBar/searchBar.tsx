import { useContext, useState } from "react";
import { ChampionContext, ChampionListContext } from "../../App";
import { Champion } from "../../types/Champion";
import './searchBar.css';

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
        <div className="search-container">
            <input className="search-input" type="text" placeholder="Enter a champion name here..." onChange={(e) => { setSearchText(e.currentTarget.value); }}></input>
            <button className="search-button" onClick={() => { searchForChampion(searchText) }}>Search</button>
        </div>
    );
}