---
title: '[알고리즘-JS] 프로그래머스: 튜플'
excerpt: '아이디어 & 구현.

집합 길이에 따라서 가장 작은게 맨 앞이고

그 다음 길이에 추가된게 다음꺼

이런식으로 result 채우면 될듯 하다.'
coverImage: '/assets/blog/cover/js_logo.png'
date: '2020-12-31T00:00:00.000Z'
author:
  name: SoonWon Kwon
  picture: '/assets/blog/authors/sw-pb.jpg'
ogImage:
  url: '/assets/blog/cover/js_logo.png'
---

> 문제 : https://programmers.co.kr/learn/courses/30/lessons/12904

# 해결 방법

아이디어 & 구현.

집합 길이에 따라서 가장 작은게 맨 앞이고

그 다음 길이에 추가된게 다음꺼

이런식으로 result 채우면 될듯 하다.

# 코드

```javascript
const getDividedArr = (arrA, arrB) => {
  return arrB.filter((el) => !arrA.includes(el));
};

const getArrFromStr = (s) => {
  const arr = s.split('');

  let parent_arr = [];
  let child_arr = [];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] === '}') {
      parent_arr.push(child_arr);
      child_arr = [];
    }

    if (+arr[i] >= 0) {
      if (+arr[i - 1] >= 0) {
        const num = child_arr.pop();
        child_arr.push(Number(num + arr[i]));
      } else {
        child_arr.push(+arr[i]);
      }
    }
  }
  return parent_arr;
};

function solution(s) {
  let answer = [];
  const arr = getArrFromStr(s);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].length === i + 1) {
        const [temp] = getDividedArr(answer, arr[j]);
        answer.push(temp);
        break;
      }
    }
  }

  return answer;
}
```
