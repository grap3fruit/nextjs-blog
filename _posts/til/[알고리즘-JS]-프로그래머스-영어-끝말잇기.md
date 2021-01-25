---
title: '[알고리즘-JS] 프로그래머스: 영어 끝말잇기'
excerpt: '단순 구현 문제

words를 돌면서 조건에 맞는것 리턴 해주면 된다.

[번호, 차례]를 잘 출력하는게 살짝 까다로움.

차례는 항상 올림으로 해주면 맞게 된다.'
coverImage: '/assets/blog/cover/js_logo.png'
date: '2021-01-05T00:00:00.000Z'
author:
  name: SoonWon Kwon
  picture: '/assets/blog/authors/sw-pb.jpg'
ogImage:
  url: '/assets/blog/cover/js_logo.png'
---

> 문제 : https://programmers.co.kr/learn/courses/30/lessons/12981

# 해결 방법

단순 구현 문제

words를 돌면서 조건에 맞는것 리턴 해주면 된다.

[번호, 차례]를 잘 출력하는게 살짝 까다로움.

차례는 항상 올림으로 해주면 맞게 된다.

# 코드

```javascript
const getResult = (idx, n) => {
  return [(idx % n) + 1, Math.ceil((idx + 1) / n)];
};

const check = (lastWord, n, word, idx, visited) => {
  if (visited.get(word)) {
    return getResult(idx, n);
  }
  if (idx > 0) {
    if (lastWord[lastWord.length - 1] !== word[0]) {
      return getResult(idx, n);
    }
  }
  return null;
};

function solution(n, words) {
  let answer = null;
  const visited = new Map();

  words.forEach((word, idx) => {
    if (!answer) {
      answer = check(words[idx - 1], n, word, idx, visited);
      visited.set(word, true);
    }
  });
  if (!answer) {
    answer = [0, 0];
  }
  return answer;
}
```
