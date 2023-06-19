import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Base from './components/Base';

function App() {
  return (
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  );
}

export default App;
