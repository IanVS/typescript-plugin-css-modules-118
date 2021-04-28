import React, { useState, useEffect } from 'react';

import { Button } from './components/Button';
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <Button
            as="a"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            primary
          >
            Learn React
          </Button>
        </p>
      </header>
    </div>
  );
}

export default App;
