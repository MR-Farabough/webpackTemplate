import _ from 'lodash';
import printName from './print';

function component() {
	const element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.textContent = printName('Michael');

	return element;
}

document.body.appendChild(component());
