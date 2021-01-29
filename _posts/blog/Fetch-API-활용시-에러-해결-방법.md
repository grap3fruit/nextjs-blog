---
title: 'Fetch API 활용시 에러 해결 방법'
excerpt: 'JavaScript에서는 Fetch API를 제공한다. 위 두가지 방법으로 fetch를 해줄 수 있다.

하지만 사용하는데 있어서 이슈가 있었는데, 아래와 같이

Firefox 에서 `Uncaught (in promise) TypeError: NetworkError when attempting to fetch resource.`

Chrome 에서 `Uncaught (in promise) TypeError: Failed to fetch 

라는 에러가 발생했다.
'
coverImage: '/assets/blog/cover/js_logo.png'
date: '2021-01-29T23:11:00.000Z'
author:
  name: SoonWon Kwon
  picture: '/assets/blog/authors/sw-pb.jpg'
ogImage:
  url: '/assets/blog/cover/js_logo.png'
---

JavaScript에서는 Fetch API를 제공한다.

[MDN 문서의 Fetch 사용법](<[https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch의_사용법](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95)>) 에 나온것과 같이

## GET method 호출시

```
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
```

## POST 등 나머지 method 호출 시

```
// Example POST method implementation:

postData('http://example.com/answer', {answer: 42})
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url = '', data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native JavaScript objects
}
```

위 두가지 방법으로 fetch를 해줄 수 있다.

하지만 사용하는데 있어서 이슈가 있었는데, 아래와 같이

Firefox 에서 `Uncaught (in promise) TypeError: NetworkError when attempting to fetch resource.`

Chrome 에서 `Uncaught (in promise) TypeError: Failed to fetch`

라는 에러가 발생했다. 이를 2가지 방법을 통해 해결할 수 있었다.

## 1. URL을 잘못 적은 경우

Fetch API 호출을 위해서는 위 코드에 나타나듯이 파라미터로 url 문자열을 넘겨줘야한다.

만약 localhost에서 테스트하고 있는 상황을 가정할 경우

http 없이, `localhost:3000/api` 이런식으로 url 값을 넘겨주면 위와 같은 에러를 띄운다.

`http://localhost:3000/api` 이렇게 값을 넣어줘야 한다.

## 2. CORS

CORS에 대한 내용은 이 글에서 설명하기에는 내용이 좀 길어서 다른 자료들을 참고하시는걸 추천드린다.

구글링을 해보면 좋은 자료들이 아주 많다. [추천 글](https://evan-moon.github.io/2020/05/21/about-cors/)

아무튼 CORS 처리를 해주지 않았을 경우 CORS 에러와 함께 위 에러가 떴으며,

가장 간단하게는 express의 app.js에 `app.use(cors());` 를 추가해주어서 해결 할 수 있다.

## 참고

[https://developer.mozilla.org/ko/docs/Web/API/Fetch*API/Fetch의*사용법](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95)

[https://evan-moon.github.io/2020/05/21/about-cors/](https://evan-moon.github.io/2020/05/21/about-cors/)
