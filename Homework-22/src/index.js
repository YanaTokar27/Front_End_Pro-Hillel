import $ from "jquery";
import { getButton } from "./button/button";
import './index.css';
import image1 from './assets/fox.jpeg';
import image2 from './assets/rabbit.jpeg';

console.log(image1)

getButton();

const picture = document.createElement('img');
picture.setAttribute('src', image1);
document.querySelector('body').appendChild(picture);

const picture2 = document.createElement('img');
picture2.setAttribute('src', image2);
picture2.setAttribute('width', '200');
picture2.setAttribute('height', '300');

document.querySelector('body').appendChild(picture2);

