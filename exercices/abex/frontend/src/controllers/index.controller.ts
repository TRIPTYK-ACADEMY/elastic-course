import { render } from "../renderer";
import { SeachService } from "../services/search.service";

const indexController = async ()=>{
    const bar = document.querySelector("#search-bar") as HTMLFormElement;
    bar?.addEventListener("submit",async (e) => {
        e.preventDefault();
        const searchBar = bar.elements.item(0) as HTMLInputElement;
        const searchResult   = await SeachService.search(searchBar.value);
        render('/search-results', {
            results : searchResult
        });
    })
};

export {indexController};