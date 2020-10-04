import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="app">
      <header className="app-header">
        <Link className="app-link" to="/about">
          About
        </Link>
      </header>
    </div>
  );
}

export default Home;
