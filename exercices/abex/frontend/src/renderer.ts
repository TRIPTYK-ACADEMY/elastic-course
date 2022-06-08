import { routes } from './router';
import { SearchService } from './services/search.service';
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const app = document.querySelector<HTMLDivElement>('#app')!;
const render =async (route:string,datas:Record<string,unknown>={}) =>{
    const url = new URL(route, window.location.protocol + window.location.host);
    app.innerHTML = await routes[url.pathname].view(datas);
    console.log(SearchService.lang);
    await routes[url.pathname].controller(url);
    window.history.pushState({},route,window.location.origin + route);
};


export {render};