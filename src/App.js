import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet-async';


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>seo 대응하기</title>
        <meta name="description" content="seo 대응하기" ></meta>
        <meta name="theme-color" content="#008f68" ></meta>
        <meta name="keywords" content="react, meta tags, seo" />
        <meta name="author" content="seonju" />
      </Helmet>
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
