export const appData = {
    beers: {
        range: [0, 9],
        beers: [],
        setRange: (newRange) => {
            appData.beers.range = newRange;
        },
        setBeers: (newBeers) => {
            appData.beers.beers = newBeers;
        }
    }
}

export default appData;