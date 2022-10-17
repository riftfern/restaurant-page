function contactContent(){
    const contactDiv = document.createElement('div');
    const contactList = document.createElement('ul');
    const phoneMsg = document.createElement('li');
    const phoneNum = document.createElement('li');
    const emailMsg = document.createElement('li');
    const emailAddy = document.createElement('li');
    
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

    contactList.appendChild(phoneMsg,phoneNum,emailAddy,emailMsg);
    contactDiv.appendChild(contactList);

    return contactDiv;
};

export{
    contactContent,
};