import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Kavbar from './Component/Navbar';
import Sard from './Component/Sard';

function App() {
  return (
    <div className='App'>
      <Kavbar />
      <div style={{ marginTop: '50px',fontSize:"10px" }}>
        <Sard />
      </div>
    </div>
  );
}

export default App;