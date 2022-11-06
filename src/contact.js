function contactContent(){
    const contactDiv = document.createElement('div');
    const contactList = document.createElement('ul');
    const phoneMsg = document.createElement('li');
    const phoneNum = document.createElement('li');
    const emailMsg = document.createElement('li');
    const emailAddy = document.createElement('li');
    const footer = document.createElement('footer');
    
    contactDiv.className = 'contactDiv';
    contactList.className = 'contactList';
    phoneMsg.className = 'phoneMsg';
    phoneNum.className = 'phoneNum';
    emailMsg.className = 'emailMsg';
    emailAddy.className = 'emailAddy';

    phoneMsg.innerText = `Give us a call.  You'll be on hold forever.`;
    phoneNum.innerText = `1-800-787-8008`;
    emailMsg.innerText = `Need to reach us by email? No problem.`
    emailAddy.innerText = `willnotreplyunlessitsanegativereview@taqueriamaldia.com`;
    footer.innerText = `Looking for a job?  Send us an email to apply, then we'll tell you to come in and then tell you to send another email.`;

    contactList.appendChild(phoneMsg);
    contactList.appendChild(phoneNum)
    contactList.appendChild(emailMsg)
    contactList.appendChild(emailAddy)
    contactDiv.appendChild(contactList);
    contactDiv.appendChild(footer);

    return contactDiv;
};

export{contactContent};