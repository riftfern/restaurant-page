function header(){
    const headDiv = document.createElement('div');
    const header = document.createElement('h1');
    const nav = document.createElement('nav');
    const homeLink = document.createElement('button');
    const menuLink = document.createElement('button');
    const contactLink = document.createElement('button');

    headDiv.className = 'headDiv';
    nav.className = 'nav';
    homeLink.className = 'tabLinks';
    homeLink.id = 'home';
    menuLink.className = 'tabLinks';
    menuLink.id = 'menu';
    contactLink.className = 'tabLinks';
    contactLink.id = 'contact';

    header.innerText = 'Taqueria Mal Dia';
    homeLink.innerText = `Home`;
    contactLink.innerText = `Contact Us`;
    menuLink.innerText = `Menu`;

    nav.appendChild(homeLink);
    nav.appendChild(menuLink);
    nav.appendChild(contactLink);
    headDiv.appendChild(header);
    headDiv.appendChild(nav);

    return headDiv;
}

export {header};