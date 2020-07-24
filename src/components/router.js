import initHello from './hello';
import initBye from './bye';

const pages = {
  hello: initHello,
  bye: initBye,
};

// function parseHash() {
//   const { hash } = window.location;
//   return hash;
// }

const { hash } = window.location;
let url;
let urlArray;

function parseHash() {
  url = hash.replace('#/', '');
  urlArray = url.split('/');
  console.log(urlArray);
}

function init() {
  this.changePage();
  window.addEventListener('hashchange', this.changeHash.bind(this));
}

function changeHash() {
  this.hash = window.location.hash;
  this.changePage();
}

export default function initRout() {
  console.log(window.location);
  parseHash();
  if (url !== '') {
    const page = pages[urlArray.shift()];
    console.log(page);
    page();
  }
}
