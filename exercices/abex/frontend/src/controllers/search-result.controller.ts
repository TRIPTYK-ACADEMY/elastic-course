import { render } from '../renderer';
import { SearchService } from '../services/search.service';

const searchController = async (newURL: URL)=>{
    /**
     * Pas de paramètre q ? recherche incorrecte => on redirige
     */
    if (!newURL.searchParams.get('q')) {
        render('/');
        return;
    }

    /**
     * Si les données de recherche n'ont pas été chargées précédemment, l'on charge les données et l'on recharge la vue
     */
    if (SearchService.results === undefined) {
        const searchResult   = await SearchService.search(newURL.searchParams.get('q')!);
        render(`/search-results?q=${newURL.searchParams.get('q')!}`, {
            results : searchResult
        });
        return;
    }

    const frBtn = document.querySelector('#fr-btn') as HTMLButtonElement;
    const nlBtn = document.querySelector('#nl-btn') as HTMLButtonElement;
    const header = document.querySelector('h1') as HTMLHeadingElement;
    

    const loadTranslation = (lang : 'fr' | 'nl')  => {
        header.textContent = lang === 'fr' ? 'Résultats' : 'Zoekresultaat';
    };

    frBtn.addEventListener('click', () => {
        SearchService.lang = 'fr';
        loadTranslation('fr');
    });
    nlBtn.addEventListener('click', () => {
        SearchService.lang = 'nl';
        loadTranslation('nl');
    });

    loadTranslation(SearchService.lang);

};

export {searchController};