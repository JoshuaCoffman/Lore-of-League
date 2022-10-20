
export const getChampionIcon = async (championName: string) => {
    const url: URL = new URL(`http://ddragon.leagueoflegends.com/cdn/12.20.1/img/champion/${championName}.png`);

    const response = await fetch(url).then((response) => response)
    return response.url;
}

export const getChampionList = async () => {
    const url: URL = new URL("http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json");

    const response = await fetch(url);
    const json = await response.json();

    const values: any[] = Object.values(json.data);

    values.forEach(async (value, i) => {
        values[i].img = await getChampionIcon(value.id)
        values[i].key = value.id
      });

      console.log('service', values)
    return values;
}