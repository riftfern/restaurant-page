function menuContent(){
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menuDiv'

    const menuHeader = document.createElement('h2');
    const menuCard1 = document.createElement('div');
    const menuCard2 = document.createElement('div');
    const menuCard3 = document.createElement('div');
    const menuCard4 = document.createElement('div');
    const menuCard5 = document.createElement('div');
    const menuCard6 = document.createElement('div');
    const footer = document.createElement('footer');

    menuHeader.className = 'menuHeader';
    menuCard1.className = 'menuCard';
    menuCard2.className = 'menuCard';
    menuCard3.className = 'menuCard';
    menuCard4.className = 'menuCard';
    menuCard5.className = 'menuCard';
    menuCard6.className = 'menuCard';
    footer.className = 'menuFooter';

    menuHeader.innerText = `Menu`;
    menuCard1.innerText = `Chips and Guac:  We got the guac from kroger and theres too few chips. $27.99.`;
    menuCard2.innerText = `Taquito Appitizer:  Depending on how large your party is, we'll give you an unveven number to share amongst yourselves.  $45.87`
    menuCard3.innerText = `Salsa Sampler:  A selection of three of our homemade salsas; Mild (diced tomatoes in a bowl) Way too Hot, and Ghost Pepper.  $85.99`
    menuCard4.innerText = `Tacos: Our meat falls apart in your mouth, while our shells fall apart in your hands.  Two for $40 or 1 for $30.`;
    menuCard5.innerText = `Burrito:  Mostly rice and beans with some of your choice protien.  All of the cheese will be in one bite.  $12 or make it a bowl for and additonal Bitcoin`;
    menuCard6.innerText = `Protien Choices: Choose from grilled or marinated chicken, beef, or pork.  They're all dry, but also incredibly juicy.  *Non meat option available upon request`;
    footer.innerText = `*Upon request for a meatless option we will ask you to leave`;

    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(menuCard1);
    menuDiv.appendChild(menuCard2);  
    menuDiv.appendChild(menuCard3);  
    menuDiv.appendChild(menuCard4);  
    menuDiv.appendChild(menuCard5);  
    menuDiv.appendChild(menuCard6);  
    menuDiv.appendChild(footer);

    return menuDiv;
};

export {menuContent};