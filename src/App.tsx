import React           from 'react';
import {BasePage}      from './components/page';
import {BrowserRouter} from 'react-router-dom';
import { Provider }    from 'react-redux';
import { store }       from './store';


function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <BasePage/>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
