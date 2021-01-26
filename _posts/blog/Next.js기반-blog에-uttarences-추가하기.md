---
title: 'Next.js기반 blog에 uttarences 추가하기'
excerpt: 'utteranc.es는 Github 계정 기반으로 동작하며, 깃헙 이슈를 통해 코멘트를 입력받을 수 있도록 해주는 위젯입니다. 최근 많은 블로그, 특히 개발자 분들이 많이 쓰시는 기술블로그에서는 uttarences를 등록하여 Github 로그인을 통해 간편하게 코멘트를 입력할 수 있도록 구성하는 사례가 많습니다.'
coverImage: '/assets/blog/cover/logo.png'
date: '2021-01-26T17:46:00.000Z'
author:
  name: SoonWon Kwon
  picture: '/assets/blog/authors/sw-pb.jpg'
ogImage:
  url: '/assets/blog/cover/logo.png'
---

[utteranc.es](https://utteranc.es/)는 Github 계정 기반으로 동작하며, 깃헙 이슈를 통해 코멘트를 입력받을 수 있도록 해주는 위젯입니다. 최근 많은 블로그, 특히 개발자 분들이 많이 쓰시는 기술블로그에서는 uttarences를 등록하여 Github 로그인을 통해 간편하게 코멘트를 입력할 수 있도록 구성하는 사례가 많습니다.

## 적용 방법

[https://utteranc.es/](https://utteranc.es/) 공식 사이트에서 순서대로 내용을 따라가 주시면 됩니다.

** 깃헙 repository(저장소)에 utterance app을 꼭 설치하시기 바랍니다. **  
** 이슈가 등록되는 저장소는 public이어야 합니다. **

그 다음 빈칸, 체크박스를 본인에 맞게 입력합니다.

> 많은 분들이 코멘트가 남겨지는 저장소를 따로 만드시던데, 저는 이유를 못찾아서 그냥 blog가 있는 저장소로 등록해주었습니다.  
> 아직까진 별다른 이슈가 없었습니다. 코멘트도.. 😂

빈칸을 모두 채우면 마지막에 아래와 같은 코드를 생성해줍니다.

```javascript
<script
  src="https://utteranc.es/client.js"
  repo="grap3fruit/nextjs-blog"
  issue-term="title"
  label="blog-comment"
  theme="github-light"
  crossorigin="anonymous"
  async
></script>
```

이를 원하는 페이지의 코드에 넣어주기만 하면 해당 페이지에 Github 계정 기반으로 코멘트를 달 수 있는 utterances 위젯이 생성됩니다.

굉장히 간단하죠! ✨

## 이슈 1

![image](https://user-images.githubusercontent.com/13213473/105818212-f8c3a980-5ff9-11eb-9549-60eaafc3102c.png)

하지만 그냥 script에 이런식으로 속성들을 추가해줄 경우 위와 같이 타입 에러가 발생하는 이슈가 있었습니다.

[MDN 문서](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement) 에 따르면 script에는 HTMLElement에서 상속받은 HTMLScriptElement의 속성들이 정의되어 있는데요. 위 코드에서는 정의되지 않은 repo와 같은 속성들을 넣으려고 했기 때문에 해당 에러를 띄우는 것이었습니다.

이를 해결하기 위해서 `setAttribute`와 같은 DOM API를 활용해 새로운 속성들을 추가해 주었습니다.

## uttarences 컴포넌트 코드 작성

아래와 같이 Utterances 라는 이름의 component를 작성합니다. 이름은 Comment로 하셔도 되고 자유롭게 하시면 됩니다.

위에서 작성했던 script의 속성 값들을 아래 코드에 맞게 넣어줍니다.  
`setAttribute`를 통해 기존 HTMLScriptElement에 없던 속성들을 추가해줍니다.

코드는 utterance 깃헙에서 [example for react use](https://github.com/utterance/utterances/issues/161) 이슈를 참고했습니다.

```javascript
import React from 'react';

const Utterances: React.FC = () => (
  <section
    ref={(elem) => {
      if (!elem) {
        return;
      }
      const scriptElem = document.createElement('script');
      scriptElem.src = 'https://utteranc.es/client.js';
      scriptElem.async = true;
      scriptElem.setAttribute('repo', 'grap3fruit/nextjs-blog');
      scriptElem.setAttribute('issue-term', 'title');
      scriptElem.setAttribute('theme', 'github-light');
      scriptElem.setAttribute('label', 'blog-comment');
      scriptElem.crossOrigin = 'anonymous';
      elem.appendChild(scriptElem);
    }}
  />
);

export default Utterances;
```

그리고 생성한 컴포넌트를 모듈로 가져와 아래와 같이 삽입을 원하는 위치에 넣어줍니다.

```javascript
<section>
  <ContentComponents />
  <SectionSeparator />
  <Utterances />
</section>
```

결과물은 아래 달린 코멘트로 확인하실 수 있습니다. 😄

## 이슈 2

issue-term을 path로 주게되면, 한글이 전부 유니코드 형태로 이슈가 생성되어 보기가 어려운 문제가 있었습니다.  
하지만 title로 하면 한글이 제대로 보여져, title로 지정해주었습니다. 본인의 환경에 맞게 해주시면 되겠습니다!

## 참고

https://github.com/utterance/utterances/issues/161
