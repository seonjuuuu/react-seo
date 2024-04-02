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
        <meta property="og:site_name" content="SEO 개선 프로젝트" />
        <meta property="og:title" content="SEO" />
        <meta property="og:url" content="SEO-Site" />
        <meta property="og:description" content="SEO를 개선하는 프로젝트" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
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
