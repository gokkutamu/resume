import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Base from './components/Base';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Base />
      </BrowserRouter>
    </div>
  );
}

export default App;
