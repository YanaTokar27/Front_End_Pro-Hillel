import $ from "jquery";
import { getButton } from "./button/button";
import './index.css';
import image from './assets/fox.jpeg';

getButton();

const picture = document.createElement('img');
picture.setAttribute('src', image);
document.querySelector('body').appendChild(picture);