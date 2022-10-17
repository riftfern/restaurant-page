import './styles.css';
//import {contactContent} from './contact.js';
//import {menuContent} from './menu.js';

function content(){
    const element = document.createElement('div');
    const header = document.createElement('h1');
    const nav = document.createElement('ul');
    const homeLink = document.createElement('li');
    const menuLink = document.createElement('li');
    const contactLink = document.createElement('li');
    const bodyDiv = document.createElement('div');
    const quote = document.createElement('h2');
    const originStory = document.createElement('div');
    const footer = document.createElement('footer');
    
    element.className = 'element';

    nav.className = 'nav';
    
    homeLink.className = 'tabContent';
    homeLink.id = 'home'
    
    menuLink.className = 'tabContent';
    menuLink.id = 'menu';
    
    contactLink.className = 'tabContent';
    contactLink.id = 'contact';
    
    bodyDiv.className = 'bodyDiv';
    quote.className = 'quote';
    originStory.className = 'originStory';

    header.innerText = 'Taqueria Mal Dia';
    quote.innerText = `The Trendy New Taco Place Your Friends Swear Isn't Overpriced and Pretentious`;
    originStory.innerText = `Founded six months into the pandemic, after the local family that owned it for years defaulted on their mortgage.  Taqueria Mal Dia strives to bring you authentic flavors, in an atmosphere that makes you feel shame for living in a first world country.`;
    homeLink.innerText = `Home`;
    contactLink.innerText = `Contact Us`;
    menuLink.innerText = `Menu`;
    footer.innerText = `We reserve the right to add as many 20% service charges as we see fit.  We accept cash but you must round up to the nearest twenty, and we do not give change.`;
    
    nav.appendChild(homeLink);
    nav.appendChild(menuLink);
    nav.appendChild(contactLink);

    bodyDiv.appendChild(quote);
    bodyDiv.appendChild(originStory);

    element.appendChild(header);
    element.appendChild(nav);
    element.appendChild(bodyDiv);
    element.appendChild(footer);
    
    return element;
}

document.body.appendChild(content());
