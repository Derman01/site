import React from 'react';
import {BasePage} from './components/page';
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <BasePage/>
      </BrowserRouter>
  );
}

export default App;
