import React from 'react';
import logo from './logo.svg';
import './App.css';
import {sequence} from '0xsequence'

function App() {
  React.useEffect(() => {
    sequence.initWallet('mumbai')

    const login = async (networkId: any) => {
        const wallet = await sequence.getWallet()
        const connectDetails = await wallet.connect({
          app: 'multi',
          authorize: true,
          // And pass settings if you would like to customize further
          settings: {
            theme: "purple",
          },
          networkId: networkId
        })
        console.log(connectDetails)
      }
      login(80001)
      setTimeout(async () => {
        login(137)
      }, 4000)
    })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
