interface indexData {
    
}

const indexView = (datas: indexData) => {
    return `
        <h1 class="font-semibold text-xl">Rechercher</h1>
        <form class="my-10 flex flex-col items-center" id="search-bar">
            <input class="w-1/2 h-10" value="" placeholder="search" />
            <button class="p-2 w-1/4 mt-4 bg-blue-400" type="submit">
                Rechercher
            </button>
        </form>
        `;
};
export { indexView };