import routes from '../config/routes.js';
import Storage from '../config/storage.js';

const App = () => { 
  Storage.init();
  
  return { routes };
};

export default App;
