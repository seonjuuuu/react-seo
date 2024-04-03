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
