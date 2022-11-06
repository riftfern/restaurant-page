function homeContent(){
    const homeDiv = document.createElement('div');
    const bodyDiv = document.createElement('div');
    const quote = document.createElement('h2');
    const originStory = document.createElement('div');
    const footer = document.createElement('footer');
    
    homeDiv.className = 'homeDiv';
    bodyDiv.className = 'bodyDiv';
    quote.className = 'quote';
    originStory.className = 'originStory';
    footer.innerText = `We reserve the right to add as many 20% service charges as we see fit.  We accept cash but you must round up to the nearest twenty, and we do not give change.`;

    
    quote.innerText = `The Trendy New Taco Place Your Friends Swear Isn't Overpriced and Pretentious`;
    originStory.innerText = `Founded six months into the pandemic, after the local family that owned it for years defaulted on their mortgage.  Taqueria Mal Dia strives to bring you authentic flavors, in an atmosphere that makes you feel shame for living in a first world country.`;

    //bodyDiv.appendChild(quote);
    bodyDiv.appendChild(originStory);
    
    homeDiv.appendChild(bodyDiv);
    homeDiv.appendChild(footer);
    
    return homeDiv;
}

export {homeContent};