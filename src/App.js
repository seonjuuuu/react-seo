import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>SEO</title>
        <meta name="description" content="seo 대응하기"></meta>
        <meta name="theme-color" content="#008f68"></meta>
        <meta name="keywords" content="react, meta tags, seo" />
        <meta name="author" content="seonju" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:site_name" content="SEO 개선 프로젝트" />
        <meta property="og:title" content="SEO" />
        <meta property="og:url" content="SEO-Site 주소" />
        <meta property="og:description" content="SEO를 개선하는 프로젝트" />
        <meta property="og:image" content="이미지주소" />
        <meta property="og:description" content="Description Here" />
        <meta property="og:site_name" content="Site Name" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="SEO 개선 프로젝트" />
        <meta name="twitter:title" content="SEO" />
        <meta name="twitter:description" content="SEO를 개선하는 프로젝트" />
        <meta name="twitter:image" content="이미지 주소" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>SEO 최적화 프로젝트</h1>
      </header>
    </div>
  );
}

export default App;
