---
title: '[알고리즘-JS] 프로그래머스: 위장'
excerpt: '아이디어를 통해 구현.

`입지않는 경우 + 1`을 해줘서 경우의수를 구해준다.  
`하나도 입지 않는 경우`는 불가능 하므로 `-1` 해준다.

이 문제가 왜 해시인가? 딕셔너리 아닌가? 했었는데,  
해시맵 === 딕셔너리 였다. 같은 자료구조인데 여러가지로 불리는...
'
coverImage: '/assets/blog/cover/js_logo.png'
date: '2021-01-07T00:00:00.000Z'
author:
  name: SoonWon Kwon
  picture: '/assets/blog/authors/sw-pb.jpg'
ogImage:
  url: '/assets/blog/cover/js_logo.png'
---

> 문제 : https://programmers.co.kr/learn/courses/30/lessons/42578

# 해결 방법

아이디어를 통해 구현.

`입지않는 경우 + 1`을 해줘서 경우의수를 구해준다.  
`하나도 입지 않는 경우`는 불가능 하므로 `-1` 해준다.

# 이슈

이 문제가 왜 해시인가? 딕셔너리 아닌가? 했었는데,  
해시맵 === 딕셔너리 였다. 같은 자료구조인데 여러가지로 불리는..

일반적인 object형태로도 구현 되고, ES6의 map 자료구조를 써도 가능하다.

# 코드

```javascript
function solution(clothes) {
  let answer = 1;
  const data = {};

  clothes.forEach((cloth) => {
    if (!data[cloth[1]]) {
      return (data[cloth[1]] = [cloth[0]]);
    }
    data[cloth[1]].push(cloth[0]);
  });

  for (const el in data) {
    answer *= data[el].length + 1;
  }
  answer -= 1;

  return answer;
}
```
