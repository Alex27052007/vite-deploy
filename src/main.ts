import './style.css';
import * as lodash from 'lodash';

console.log('main.ts');

const names = ['Anna', 'Ben', 'Frank', 'Suzy'];
const otherNames = ['Ben', 'Joe', 'Suzy', 'Tom'];
// * aus der Bibliothek lodash die Funktion unionWith nutzen:
// * vereinigt zwei Arrays und nimmt nur die eindeutigen Werte
const uniqueNames = lodash.unionWith(names, otherNames);

const appDiv = document.getElementById('app');

if (appDiv) {
  appDiv.innerHTML = uniqueNames.join(', ');
}
console.log('geändert');
