import './styles.css';
import {clearContentDiv, homeLoad, menuLoad, contactLoad, init} from './pageLoad.js';

let btnNames = ['home', 'menu', 'contact'];

init();

btnNames.forEach(btnName => {
    let btn = document.getElementById(btnName);
    btn.addEventListener('click', () => {
        if(btn.id == 'home'){
            clearContentDiv();
            homeLoad();
        }else if (btn.id == 'menu'){
            clearContentDiv();
            menuLoad();
        }else if(btn.id == 'contact'){
            clearContentDiv();
            contactLoad();
        }
    })
})



