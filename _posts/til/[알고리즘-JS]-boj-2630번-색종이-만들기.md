---
title: '[알고리즘-JS] boj 2630번 색종이 만들기'
excerpt: '문제 : https://www.acmicpc.net/problem/2630 경우의 수는 N, N/2, N/4 ... 로 가면서 N/a === 1 까지. 큰것부터 비교해서 점점 작게 비교한다. 전체 data와 N/a (==size)를 `checkColor` 함수가 넘겨 받는다. n _ n 을 돌면서, size _ size 만큼 체크하고, data 끝까지 수행한다.'
coverImage: '/assets/blog/cover/js_logo.png'
date: '2021-01-21T23:12:00.000Z'
author:
  name: SoonWon Kwon
  picture: '/assets/blog/authors/sw-pb.jpg'
ogImage:
  url: '/assets/blog/cover/js_logo.png'
---

> 문제 : https://www.acmicpc.net/problem/2630

# 해결 방법

경우의 수는 N, N/2, N/4 ... 로 가면서 N/a === 1 까지. 큰것부터 비교해서 점점 작게 비교한다.

전체 data와 N/a (==size)를 `checkColor` 함수가 넘겨 받는다.

n _ n 을 돌면서, size _ size 만큼 체크하고, data 끝까지 수행한다.

이때, size \* size의 값이 모두 같으면, -1로 변경하고. 1이면 `blueCount += 1`, 0이면 `whiteCount += 1` 반복.

# 코드

```javascript
const setVisited = (col, row, size, data) => {
  for (let i = col; i < col + size; i++) {
    for (let j = row; j < row + size; j++) {
      data[i][j] = -1;
    }
  }
};

const getSameColor = (col, row, size, data) => {
  if (row + size > data.length || col + size > data.length) return false;

  let color = data[col][row];
  for (let i = col; i < col + size; i++) {
    for (let j = row; j < row + size; j++) {
      if (data[i][j] !== color) {
        return;
      }
    }
  }

  setVisited(col, row, size, data);
  return color;
};

const checkColor = (size, data) => {
  const VISITED = -1;
  let whiteCount = 0;
  let blueCount = 0;

  for (let i = 0; i < data.length; i += size) {
    for (let j = 0; j < data.length; j += size) {
      if (data[i][j] !== VISITED) {
        let color = getSameColor(i, j, size, data);
        if (color === 0) whiteCount += 1;
        if (color === 1) blueCount += 1;
      }
    }
  }

  return [whiteCount, blueCount];
};

const solution = (N, data) => {
  let blueCount = 0;
  let whiteCount = 0;

  // n, n/2 , n/4 , n/8 ... n/x === 1
  for (let i = N; i >= 1; i /= 2) {
    let result = checkColor(i, data);
    whiteCount += result[0];
    blueCount += result[1];
  }

  console.log(whiteCount);
  console.log(blueCount);
};

let fs = require('fs');
let input = fs.readFileSync('/std/dev').toString().split('\n');

const N = +input[0];
const data = [];
for (let i = 1; i < N + 1; i++) {
  data.push(input[i].split(' ').map((el) => +el));
}

solution(N, data);
```
