---
title: 'JS 알고리즘 구현: 큐(Queue) 구현 vs Array 메서드(shift, splice) 사용했을때 속도 비교'
excerpt: '알고리즘 코딩테스트에서 Queue 자료구조를 써야할때가 있습니다. 대표적으로 BFS를 구현할때죠. JavaScript의 라이브러리가 따로 없기 때문에, Array.shift() 또는 Array.splice(0,1) 등 array 메소드를 활용하여 큐 처럼 사용할 수 있습니다.
하지만 이런 방식을 통해 효율성을 판단하는 코딩테스트 문제를 무사히 통과할 수 있을지 의문이 들었는데요. 그래서 직접 Queue를 구현하고, Array.shift, Array.splice와의 속도를 비교하는 실험을 진행해보았습니다.'
coverImage: '/assets/blog/cover/js_logo.png'
date: '2021-01-16T14:42:00.000Z'
author:
  name: SoonWon Kwon
  picture: '/assets/blog/authors/sw-pb.jpg'
ogImage:
  url: '/assets/blog/cover/js_logo.png'
---

# 개요

알고리즘 코딩테스트에서 Queue 자료구조를 써야할때가 있습니다. 대표적으로 BFS를 구현할때죠.

C++의 경우 STL을 통해 사용할 수 있고, Python의 경우 deque를 써서 삽입, 삭제 시 O(1)의 시간복잡도를 갖는 큐 자료구조를 활용할 수 있습니다. JavaScript의 경우 그런 라이브러리가 따로 없기 때문에, Array.shift() 또는 Array.splice(0,1) 등 array 메소드를 활용하여 큐 처럼 사용할 수 있습니다.

하지만 이런 방식을 통해 효율성을 판단하는 코딩테스트 문제를 무사히 통과할 수 있을지 의문이 들었는데요. 그래서 직접 Queue를 구현하고, Array.shift, Array.splice와의 속도를 비교하는 실험을 진행해보았습니다.

# 실험 방식

```javascript
const start = new Date().getTime();
/*
  logic ...
*/
const end = new Date().getTime();
console.log(end - start);
```

위와 같이 알고리즘 시작과 끝에 `new Date().getTime()`을 써서 시간 차이를 구합니다.

```javascript
class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.head.next = this.tail;
    } else this.tail.next = node;

    this.tail = node;
    this.size += 1;
  }

  length() {
    return this.size;
  }

  popLeft() {
    const popedItem = this.head;
    this.head = this.head.next;
    this.size -= 1;
    return popedItem;
  }

  print() {
    let current = this.head;
    console.log('start print');
    while (current) {
      console.log(current.item);
      current = current.next;
    }
  }
}
```

위는 **Singly Linked List**로 작성한 큐 입니다.  
(구현에 문제가 있다면 피드백 주시면 감사하겠습니다.)

```javascript
// 100000개 삽입
const q = new SinglyLinkedList();
for (let i = 0; i < 100000; i++) {
  q.push(1);
}
const arrSplice = [];
for (let i = 0; i < 100000; i++) {
  arrSplice.push(1);
}
const arrShift = [];
for (let i = 0; i < 100000; i++) {
  arrShift.push(1);
}

// 100000개 삭제
const startQ = new Date().getTime();
for (let i = 0; i < 100000; i++) {
  q.popLeft();
}
const endQ = new Date().getTime();
console.log('Queue : ', endQ - startQ);

const startSplice = new Date().getTime();
for (let i = 0; i < 100000; i++) {
  arrSplice.splice(0, 1);
}
const endSplice = new Date().getTime();
console.log('splice : ', endSplice - startSplice);

const startShift = new Date().getTime();
for (let i = 0; i < 100000; i++) {
  arrShift.shift();
}
const endShift = new Date().getTime();
console.log('shift : ', endShift - startShift);
```

위는 실험에 사용한 코드입니다.  
먼저 배열에 100000개의 값을 넣습니다.  
그리고 popLeft, splice, shift를 활용해 100000개를 모두 제거합니다.  
`new Data().getTime()`으로 알고리즘의 시작과 끝의 시간을 저장해 걸린시간을 구합니다.

# 실험 결과

결과는 다음과 같습니다.  
총 3번 시도하였으며, 컴퓨터 사양에 따라 결과는 다를 수 있습니다.

```
Queue  :  5
splice :  6029
shift  :  1625

Queue  :  5
splice :  6015
shift  :  1569

Queue  :  5
splice :  6231
shift  :  1655
```

속도는 **Queue > shift > splice** 순서로 나타났습니다.  
shift는 splice보다 약 3.7배정도 빨랐는데요.  
Queue는 shift보다 약 325배, splice보다는 약 1206배 정도 빨라, Queue의 빠른 속도를 확인할 수 있었습니다.

# 실제 테스트

실험은 끝났습니다. 이제 실제 코딩 테스트의 효율성을 충족해야하는 문제를 풀어보면서 혹시 splice, shift만 쓰더라도 통과가 되는지, 아니면 Queue를 직접 구현해 줘야 통과가 되는지 알아 봐야겠죠.

> 실제 코딩테스트 문제를 풀어보며 효율성을 비교해 보려고 했습니다만..  
> 현재 시간이 부족해서 일단 이부분은 추후에 추가하도록 하겠습니다.  
> 혹시 해보신분 계시면 댓글로 남겨주시면 감사하겠습니다. 🙇‍♂️

# 참고

https://poiemaweb.com/js-array-is-not-arrray  
https://stackoverflow.com/questions/10742369/javascript-shift-versus-splice-are-these-statements-equal
