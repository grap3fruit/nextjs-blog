---
title: '[알고리즘-JS] 프로그래머스: 네트워크'
excerpt: 'bfs 문제.

bfs에서 최단거리를 구할 필요는 없고, 지나간 모든 경로를 visited에 담아서 반환하면 이걸 하나의 네트워크라고 생각한다.

각각의 컴퓨터가 root일때 네트워크를 구하고 겹치지 않는 네트워크의 개수를 구해주면 된다.'
coverImage: '/assets/blog/cover/js_logo.png'
date: '2021-01-06T00:00:00.000Z'
author:
  name: SoonWon Kwon
  picture: '/assets/blog/authors/sw-pb.jpg'
ogImage:
  url: '/assets/blog/cover/js_logo.png'
---

> 문제 : https://programmers.co.kr/learn/courses/30/lessons/43162

# 해결 방법

bfs 문제.

bfs에서 최단거리를 구할 필요는 없고, 지나간 모든 경로를 visited에 담아서 반환하면 이걸 하나의 네트워크라고 생각한다.

각각의 컴퓨터가 root일때 네트워크를 구하고 겹치지 않는 네트워크의 개수를 구해주면 된다.

겹치지 않도록 하기위해 bfs로 root를 넣기 전, network를 모두 체크해서 겹치는 root가 있으면 같은 네트워크가 이미 있다는 것이므로 pass 했다.

위 조건에 따른 모든 network를 구한 후 개수를 세면 끝.

# 코드

```javascript
const bfs = (computers, root) => {
  const visited = [root];
  let q = [computers[root]];

  while (q.length > 0) {
    let item = q.shift();

    item.forEach((el, idx) => {
      if (el === 1 && !visited.includes(idx)) {
        q.push(computers[idx]);
        visited.push(idx);
      }
    });
  }

  return visited;
};

function solution(n, computers) {
  let answer = 0;
  const network = [];

  computers.forEach((_, idx) => {
    const visitFlag = network.some((el) => el.includes(idx));

    if (!visitFlag) {
      const newNetwork = bfs(computers, idx);
      network.push(newNetwork);
    }
  });

  // console.log(network.length);
  answer = network.length;
  return answer;
}
```
