import { useContext, useState } from "react";
import { ChampionContext, ChampionListContext } from "../../App";

export function SearchBar() {
    const [searchText, setSearchText] = useState<string>('Enter a champion name here...');
    const championContext = useContext(ChampionContext);
    const championListContext = useContext(ChampionListContext);

    const findChampion = (searchText: string) => {
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Enter a champion name here..." value={searchText}></input>
                <input type="submit" ></input>
            </form>
        </div>
    );
}