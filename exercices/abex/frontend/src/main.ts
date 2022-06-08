import { render } from './renderer';
import './style.css';

const init=(e:Event)=>{
    e.preventDefault();
    render(window.location.pathname);
};

window.addEventListener('load',init);