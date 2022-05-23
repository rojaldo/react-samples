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
    },
    apod: {
        date: new Date(),
        info: {},
        setInfo: (newInfo) => {
            appData.apod.info = newInfo;
        },
        setDate: (newDate) => {
            appData.apod.date = newDate;
        }
    }
}

export default appData;