---
title: '[알고리즘-JS] 프로그래머스: 크레인 인형뽑기 게임'
excerpt: '구현 문제.

moves는 board의 x축에 접근하는데,

이걸 result stack에 넣고,

stack에 넣을때 맨 뒤에꺼가 현재 넣는것과 동일하면 pop으로 삭제해줌.'
coverImage: '/assets/blog/cover/js_logo.png'
date: '2021-01-01T00:00:00.000Z'
author:
  name: SoonWon Kwon
  picture: '/assets/blog/authors/sw-pb.jpg'
ogImage:
  url: '/assets/blog/cover/js_logo.png'
---

> 문제 : https://programmers.co.kr/learn/courses/30/lessons/64061

# 해결 방법

구현 문제.

moves는 board의 x축에 접근하는데,

이걸 result stack에 넣고,

stack에 넣을때 맨 뒤에꺼가 현재 넣는것과 동일하면 pop으로 삭제해줌.

# 이슈

고차함수 reduce를 써서 구현해봤다.  
early return이 필요한 경우엔 for loop를 쓰는게 나을지도?

# 코드

```javascript
function solution(board, moves) {
  const result = [];
  let answer = 0;

  moves.reduce((acc, move) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] === 0) {
        continue;
      }

      if (acc.length > 0) {
        const prev = acc.pop();

        if (prev === board[i][move - 1]) {
          board[i][move - 1] = 0;
          answer += 2;
          return acc;
        }

        acc.push(prev);
      }

      acc.push(board[i][move - 1]);
      board[i][move - 1] = 0;
      return acc;
    }
    return acc;
  }, []);

  return answer;
}
```
