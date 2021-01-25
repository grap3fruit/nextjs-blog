---
title: '[알고리즘-JS] 프로그래머스: 가장 긴 팰린드롬'
excerpt: '아이디어 & 구현.

하나씩 가면서 넓혀보기. 최대한 넓힌 max 값을 리턴.'
coverImage: '/assets/blog/cover/js_logo.png'
date: '2021-12-31T00:00:00.000Z'
author:
  name: SoonWon Kwon
  picture: '/assets/blog/authors/sw-pb.jpg'
ogImage:
  url: '/assets/blog/cover/js_logo.png'
---

> 문제 : https://programmers.co.kr/learn/courses/30/lessons/12904

# 해결 방법

아이디어 & 구현.

하나씩 가면서 넓혀보기. 최대한 넓힌 max 값을 리턴.

# 테스트 케이스

```plain
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
40개

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
80개

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
79
```

# 코드

```javascript
const getMaxOddPalindrome = (word, idx) => {
  let max = 0;
  for (let i = 0; i < word.length / 2; i++) {
    if (word[idx - i] !== word[idx + i]) {
      break;
    }
    max = i * 2 + 1;
  }
  return max;
};

const getMaxEvenPalindrome = (word, idx) => {
  let max = 0;
  if (idx < word.length - 1 && word[idx] === word[idx + 1]) {
    for (let i = 0; i < word.length / 2; i++) {
      if (word[idx - i] !== word[idx + i + 1]) {
        break;
      }

      max = i * 2 + 2;
    }
  }
  return max;
};

function solution(s) {
  let sArr = s.split('');
  let answer = 0;

  for (let i = 0; i < sArr.length; i++) {
    answer = Math.max(answer, getMaxOddPalindrome(sArr, i), getMaxEvenPalindrome(sArr, i));
  }
  return answer;
}
```
