### SEO 대응하기

# 프로젝트 개요

- React 프로젝트에서 SEO 대응을 위한 최소 작업 대응

## 개발환경 세팅

```bash
$nvm use 20
$npm install
$npm run start
```

- react-helmet-async 패키지 설치

## favicon 세팅

### apple-touch-icon

파비콘(Favicon)과 마찬가지로, Apple touch icon 또는 apple-touch-icon.png는 Apple iPhone, iPod Touch, 그리고 iPad에서 웹 페이지 아이콘으로 사용되는 파일이다.

웹 페이지를 북마크하거나 홈 화면에 웹 페이지를 추가할 때, 이 아이콘이 사용된다고 한다.

이 파일이 발견되지 않으면, Apple 제품들은 웹 페이지의 스크린샷을 사용하는데, 이러면 하얀색 파일만 보일 수 있다고 한다.

### **msapplication-TileColor/** msapplication-TileImage

Microsoft Windows 운영 체제의 시작 메뉴 타일에 사용되는 웹사이트 아이콘(타일 이미지)을 지정하는 데 사용되는 HTML 메타 태그이다. 이 태그는 주로 Windows 8 이상에서 Internet Explorer 10 이상 또는 Microsoft Edge 브라우저를 사용할 때 유용하다. 사용자가 웹사이트를 Windows 시작 화면에 핀으로 고정할 때, 이 메타 태그에 지정된 이미지가 타일 아이콘으로 사용된다

`msapplication-TileImage` 의 경우 이미지 경로를 설정 할 수 있다.

```tsx
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
```

`msapplication-TileColor` 의 경우 타일의 색깔을 결정할 수 있다.

```tsx
<meta name="msapplication-TileColor" content="#ffffff">
```

### favicon의 PNG 지원

IE의 경우 png 파일의 지원이 되지 않는다. 하지만 크롬, 파이어폭스, 오페라 7+, 사파리 4+ 는 모두 png 파비콘을 지원한다.

크롬, 사파리의 경우 ico 파비콘이 있으면 png파일을 무시하고 ico 파일을 사용한다.

ico 파비콘의 경우 하나의 ico 파일에 여러가지 사이즈를 두고 활용할 수 있지만, png 파비콘의 경우 이것이 불가능하다. 그렇기 때문에 각각 필요한 사이즈를 모두 선언해 주어야한다.

```html
<link
  rel="icon"
  type="image/png"
  sizes="192x192"
  href="/android-icon-192x192.png"
/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
```

## SEO 스코어 분석

### 1. [seobility](https://www.seobility.net/en/seocheck/)

![스크린샷 2024-04-03 13 30 25](https://github.com/seonjuuuu/react-seo/assets/62421526/95840d29-c34b-4b79-b70c-a0a35107683e)

### 2.[semrush](https://ko.semrush.com/)

![스크린샷 2024-04-03 14 27 27](https://github.com/seonjuuuu/react-seo/assets/62421526/a008060e-7a05-4612-b54c-c792b9f69861)

### 3.[seositecheckup](https://seositecheckup.com/)

![스크린샷 2024-04-03 15 08 04](https://github.com/seonjuuuu/react-seo/assets/62421526/f32af755-319d-47a1-a092-1a48065accad)

### 개선해보기

1. heading Tag, 시멘틱 태그

- H1 태그에 대한 중요성을 가장 이야기를 많이 하고 있다. H1 태그는 무조건 페이지 하나에 하나씩 들어가야 하는데 H1 태그가 없어서 그부분에 대한 개선이 필요하다
- 웹접근성을 높이기 위한 시멘틱 태그를 쓰는 것이 매우 중요하다.

2. SEO 를 위해서 충분한 Text 필요

- SEO 에서는 충분한 단어수, 충분한 문장에 대한 부분도 평가를 한다. 그렇기 때문에 점수를 높이기 위해서는 충분한 Text를 가지는 것이 중요하다.

3. meta tag, title 설정 필요

- React 에서 react-helmet-async를 사용하여 동적으로 값을 넣어 주고 있으나 요소에서는 검색이 되어도 페이지 소스보기에서는 변하지 않았다. SSR 이 아니기 때문에 발생하는 문제인데, 기본적으로 index.html에 기본 값을 설정해주고 값을 동적으로 받아와 처리하는 것이 일단은 안전하다는 생각이 들었다. 하지만 동적으로 변하는 값에 대한 부분을 읽어오지 못하는 문제점이 있기 때문에 SEO 에 대응하기 위해서는 SSR을 사용하는것이 맞는것 같다.

4. viewport 설정

- viewport에 대한 설정을 해주는 것또한 SEO 스코어에 영향을 미침을 알 수 있었다.

5. sitemap.xml 설정, robots.txt 설정

- sitemap , robots 설정을 해서 구글봇이 더 잘 읽도록 설정을 하는것이 중요하다.
