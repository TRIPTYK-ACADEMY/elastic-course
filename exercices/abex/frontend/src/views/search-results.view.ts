interface searchResultsData {
    results: unknown[]
}

const searchResultsView = (datas: searchResultsData) => {
    console.log(datas);
    return `
        ${datas.results.map((e: any) => `${e._source.first_name},${e._source.last_name}`)}
        `;
};
export { searchResultsView };
