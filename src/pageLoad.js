import {homeContent} from './home.js';
import {menuContent} from './menu.js';
import {contactContent} from './contact.js';
import {header} from './header.js';

function pageLoad(head, content){
    document.getElementById('headContent').appendChild(head);
    document.getElementById('content').appendChild(content);
    
    return document;
}

function init(){
    document.getElementById('headContent').appendChild(header());
    document.getElementById('content').appendChild(homeContent());
}

function homeLoad(){
    document.getElementById('content').appendChild(homeContent());
}

function menuLoad(){
    document.getElementById('content').appendChild(menuContent());
}

function contactLoad(){
    document.getElementById('content').appendChild(contactContent());
}

function clearContentDiv() {
    let element = document.getElementById('content');
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }    
}

export {pageLoad, clearContentDiv, homeLoad, menuLoad, contactLoad, init}