import './styles.css';
import Icon from './revolt.jpg'

function content(){
    const element = document.createElement('div');

    //create document header
    const header = document.createElement('h1');
    header.innerText = 'The New Trendy Taco Place Your Friend Told You To Try';

    element.appendChild(header);

    //add background to div
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;

}

document.body.appendChild(content());
