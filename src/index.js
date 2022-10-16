import './styles.css';



function content(){
    const element = document.createElement('div');
    element.className = 'element';

    
    const header = document.createElement('h1');
    header.innerText = 'Taqueria Mal Dia';
    element.appendChild(header);

    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'bodyDiv';
    const quote = document.createElement('h2');
    quote.className = 'quote';
    const originStory = document.createElement('div');
    originStory.className = 'originStory';

    quote.innerText = `The Trendy New Taco Place Your Friends Swear Isn't Overpriced and Pretentious`;
    originStory.innerText = `Founded six months into the pandemic, after the local family that owned it for years defaulted on their mortgage.  Taqueria Mal Dia strives to bring you authentic flavors, in an atmosphere that makes you feel shame for living in a first world country.`;
    
    bodyDiv.appendChild(quote);
    bodyDiv.appendChild(originStory);
    element.appendChild(bodyDiv);

    

    const footer = document.createElement('footer');
    footer.innerText = `We reserve the right to add as many 20% service charges as we see fit.  We accept cash but you must round up to the nearest twenty, and we do not give change.`;
    element.appendChild(footer);

    //add background to div
    //const myIcon = new Image();
    //myIcon.src = Icon;
    //element.style.backgroundImage = myIcon;
    

    return element;

}


document.body.appendChild(content());
