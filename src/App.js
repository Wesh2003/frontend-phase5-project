import logo from './logo.svg';
import './App.css';
import Receipt from './components/Receipt';
import CheckoutFor from './components/Checkout_Form';
import Recommendation from './components/Recommendation';
import ShoppingCartTable from './components/Shopping_Cart_Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
