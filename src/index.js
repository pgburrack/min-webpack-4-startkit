import './style.css';
import './style.less';

console.log('hello');
const container = document.getElementById('container');
const h1 = document.createElement('h1');
h1.innerHTML = 'hello 1'
h1.className = 'less';
container.appendChild(h1);


