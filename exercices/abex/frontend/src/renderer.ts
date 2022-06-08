import { routes } from './router';
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const app = document.querySelector<HTMLDivElement>('#app')!;
const render = (route:string,datas:Record<string,unknown>={}) =>{
    app.innerHTML = routes[route].view(datas);
    routes[route].controller();
    window.history.pushState({},route,window.location.origin + route);
};


export {render};