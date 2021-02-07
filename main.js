import Page from './engine/page.js';
import App from './src/pages/app.js';

const appContainer = document.querySelector('#app');

const mainPage = new Page(App, null, appContainer);
mainPage.render();
