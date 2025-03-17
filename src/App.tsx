import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <img src={process.env.PUBLIC_URL + '/1718239085699.jpg'} alt="logo" />
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/nesrine-setti-5744a4127/"
          target="_blank"
          rel="noopener noreferrer"
        >
                    Linkedin Touti

        </a>
      </header>
    </div>
  );
}

export default App;
