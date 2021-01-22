---
title: '구름(goorm), 백준(BOJ) 코딩 테스트 JavaScript로 입력받는 방법 정리'
excerpt: '최근 프론트엔드(FE)직무로 취업을 준비하면서, 몇몇 기업은 코딩테스트(이하 코테) 언어를 JavaScript로 제한하는 경우가 있었다. 이를 대비해 JavaScript로 알고리즘 문제들을 풀어보면서 느낀 점은 테스트 케이스 입력을 받는 코드가 처음에 굉장히 낯설다는 것이다.'
coverImage: '/assets/blog/cover/js_logo.png'
date: '2021-01-16T13:02:00.000Z'
author:
  name: SoonWon Kwon
  picture: '/assets/blog/authors/sw-pb.jpg'
ogImage:
  url: '/assets/blog/cover/js_logo.png'
---

> 본 내용은 Best Practice가 아니며, JS를 이용한 코딩 테스트를 풀면서 나름대로 원활히 사용 가능했던 코드를 공유하는 글입니다.
> 더 좋은 방법에 대한 피드백 및 공유는 정말 감사합니다. 🙇‍♂️

# 개요

최근 프론트엔드(FE)직무로 취업을 준비하면서, 몇몇 기업은 코딩테스트(이하 코테) 언어를 JavaScript로 제한하는 경우가 있었다. 이를 대비해 JavaScript로 알고리즘 문제들을 풀어보면서 느낀 점은 테스트 케이스 입력을 받는 코드가 처음에 굉장히 낯설다는 것이다.

지금까지 채용과정에서 경험했던 코테 플랫폼은 프로그래머스(Programmers), 구름(goorm), 코딜리티(Codility) 정도이다. 코테 연습을 위해서는 백준(boj)이나 프로그래머스를 많이 이용했다.

대부분의 플랫폼에서는 테스트 케이스 입력에 관한 스켈레톤 코드를 제공하지만 백준은 따로 제공되지 않는다. 그리고 스켈레톤 코드도 플랫폼마다 조금씩 다른데,

**프로그래머스**나 **코딜리티**의 경우에는

```javascript
solution(input1, input2){
  let answer = 0;
  console.log(input1, inpu2);
  return answer;
}
```

이런 식으로 사용자가 테스트 케이스를 입력 받는 코드를 신경쓰지 않더라도 solution 함수 내부에서 알고리즘 로직만 작성하면 되도록 코드가 제공된다.

하지만 **백준**이나 **구름** 같은 경우, 파일을 읽어서 테스트 케이스를 입력받는 코드를 직접 작성해줘야 한다.

```javascript
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(line);
  rl.close();
}).on('close', function () {
  process.exit();
});
```

```javascript
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    console.log('Hello Goorm! Your input is', line);
    rl.close();
  }

  process.exit();
})();
```

위 2개는 구름에서 알고리즘을 풀때 제공되는 스켈레톤 코드이다. (왜 2가지 케이스를 제공해주는지는 잘 모르겠다.)

만약 아래와 같은 테스트케이스가 주어졌다고 보자.

```
2
5 3
1 0 0 1 0
0 0 0 0 1
0 0 1 1 0
0 0 1 0 0
1 0 0 0 0
5 2
0 0 0 1 0
1 1 0 0 0
1 0 0 0 0
0 0 0 1 1
0 0 0 1 0
```

이것들을 입력받으려면, 저 낯선 코드들 사이에서 어떻게 해줘야할까?

여러 블로그에서 node.js 기반 입력 방법들이 소개되고 있지만, 내가 원하는 케이스들이 한번에 정리된 것은 찾기 힘들었다. 그래서 직접 코테를 풀면서 정리했던 것을 공유한다. 내용은 구름과 백준을 기준으로 구성된다.

백준은 readline이 아닌 fs를 사용하는게 더 빠르다고 들었고, 공식적으로 fs를 권장하고 있다. 따라서 fs를 활용한 입력방식 또한 함께 정리하였다.

# 입력 코드 살펴보기

> 곧 바로 사용할 코드를 확인하고 싶으시면 아래 [입력 코드 구현](#입력-코드-구현)에 정리되어 있습니다.

좋은 개발자라면 내가 작성한 코드가 어떻게 동작하는지 알아야 하지 않을까?  
아래는 구름에서 제공되는 스켈레톤 코드이다. 간단히 코드를 살펴보며 필요한 부분들을 이해해 보자.

## 구름

### 입력 코드

```javascript
//case 1
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(line);
  rl.close();
}).on('close', function () {
  process.exit();
});
```

```javascript
// case 2
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    console.log('Hello Goorm! Your input is', line);
    rl.close();
  }

  process.exit();
})();
```

입력되는 값을 line에서 한줄씩 읽어들인다.

rl.close();를 호출하면,
case 1에서는 on("close")의 콜백인 process.exit();를 호출하여 프로세스를 종료한다.
case 2도 마찬가지로 rl.close()를 호출하면 프로세스가 종료된다.

**만약 rl.close();를 지우면, 사용자가 엔터를 치더라도 값을 계속 입력할 수 있는 상태가 된다.** 이때는 종료를 하려면 **ctrl+c**를 통해 프로세스를 종료 해주어야한다.

위 얘기를 다시 말하면, **프로세스를 종료할때만 rl.close()를 호출해주면 된다**는 것이다.

## 백준

앞서 얘기한대로 백준에서도 구름처럼 readline으로 읽어들이는게 가능하지만 느리다고 한다.
공식적으로 권장 되는 방법인 fs를 쓰자.

### 입력 코드

```javascript
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

console.log(input);
```

### test case

```
good morning
hello world!
```

테스트 케이스는 파일로 존재하고, `fs.readFileSync('/dev/stdin').toString()` 를 통해 `good morning\nhello world!\n` 라는 문자열을 읽어들인다.  
여기서 split을 통해 문자열을 `\n` 기준으로 끊어 배열로 반환한다.

그렇게 되면 `input = ['good morning', 'hello world!']`과 같이 input 배열에 한 줄씩 저장된다.

# 테스트 케이스 정리

알고리즘 문제에서 테스트케이스는 수많은 종류들이 있지만 몇가지 케이스에 대해 경험을 해 보면 대부분 응용하여 구현이 가능하다.

코드를 본격적으로 보기 전, 먼저 테스트 케이스의 종류들을 정리해 보자.

### 한줄 입력

```

case 1

10

case 2

2 3

case 3

abcd

case 4

hello world
```

### 여러줄 입력

```
case 1

5
1
2
3
4
5

case 2 (테케T 가 없는 경우)

4
2 3
1 0 0 1
1 1 1 1
0 1 0 1
0 1 1 1

case 3 (테케T 가 있는 경우)

2
3
1 2 3
4 5 6
7 8 9
2
2 1
5 4

```

일반적으로 여러줄 입력을 받을때는

테스트 케이스의 수 : T (구름은 보통 있고, 백준은 없는것 같다.)
입력 케이스의 수, 목표 좌표(또는 크기) : N, M, X, Y 등으로 표현됨
실제 처리될 data : 일반적으로 위에서 받은 크기(N) 만큼 반복해서 입력 받음

를 입력받게 된다.

테스트 케이스는 이정도에서 다양하게 응용되어 제시된다.

# 입력 코드 구현

입력 코드는 프로그래머스의 방식을 참고하여 설계되었다. solution 함수의 파라미터로 입력값을 넘겨 받아 알고리즘 로직 구현을 할 수 있도록 하였다.

이러한 방식은 입력받는 부분과 알고리즘 로직을 작성하는 부분을 깔끔하게 분리해준다.  
주석처리된 코드 대한 설명은 아래 [저장되는 data의 형태](#저장되는-data의-형태)에 있다.

## 구름

### 한줄 입력

```jsx
const solution = (data) => {
  console.log(data);
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];
rl.on('line', function (line) {
  data.push(line);
  // data = line.split('').map((el) => el);
  // data = line.split(' ').map((el) => el);
  // data = line.split('').map((el) => +el);

  rl.close();
}).on('close', function () {
  solution(data);
  process.exit();
});
```

### 여러줄 입력 (테케(T)가 없는 경우)

```jsx
const solution = (N, info, data) => {
  console.log(N);
  const [X, Y] = info;
  console.log(X, Y);
  console.log(data);
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let info = null;
let count = 0;
const data = [];

rl.on('line', function (line) {
  if (!N) {
    // N이 null이면
    N = +line;
  } else if (!info) {
    // N이 null이 아닌데, info가 null이면
    info = line.split(' ').map((el) => +el);
  } else {
    // N과 info가 null이 아니면
    data.push(line);
    // data.push(line.split('').map((el) => +el));
    // data.push(line.split('').map((el) => el));
    // data.push(line.split(' ').map((el) => +el));
    count += 1; // data를 입력받으면 count를 증가시켜주고
  }
  if (count === N) {
    // count가 N일때 rl.close()를 호출해준다.
    rl.close();
  }
}).on('close', function () {
  // rl.close()를 호출하면 이 콜백함수로 들어오고
  solution(N, info, data); // solution을 호출 한 후
  process.exit(); // 프로세스를 종료한다.
});
```

### 여러줄 입력 (테케(T)가 있는 경우)

```jsx
const solution = (N, data) => {
  console.log(N);
  console.log(data);
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = null;
let N = null;
let info = null;
let countN = 0;
let countT = 0;
let data = [];

rl.on('line', function (line) {
  if (!T) {
    T = +line;
  } else if (!N) {
    N = +line;
  } else {
    data.push(line);
    // data.push(line.split('').map((el) => +el));
    // data.push(line.split('').map((el) => el));
    // data.push(line.split(' ').map((el) => +el));
    countN += 1; // data를 입력받으면 countN을 증가시켜주고
  }
  if (countN === N) {
    // N만큼 data를 잘 입력 받았으면
    solution(N, data); // solution을 호출하고
    N = null; // T, countT를 제외한 값들을 초기화해준다.
    info = null;
    countN = 0;
    data = [];

    countT += 1; // 그리고 테스트 케이스 하나를 통과했으니 countT를 1 올려준다.
  }
  if (countT === T) {
    // 입력받은 T 만큼 테스트 케이스를 통과하게되면
    rl.close(); // rl.close()를 호출하고
  }
}).on('close', function () {
  process.exit(); // 종료한다.
});
```

solution을 호출 한 후 N, info, countN, data 를 초기화해주면 다시 rl.on('line')의 콜백 내부를 돌때, if(!T)를 건너 뛰고 반복 하게 된다.

### case 2

```jsx
const solution = (N, data) => {
  console.log(N);
  console.log(data);
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null;
  let count = 0;
  const data = [];

  for await (const line of rl) {
    if (!N) {
      N = +line;
    } else {
      data.push(line);
      // data.push(line.split(' ').map((el) => +el));
      // data.push(line.split('').map((el) => el));
      // data.push(line.split('').map((el) => +el));
      count += 1;
    }
    if (N === count) {
      rl.close();
    }
  }

  solution(N, data);
  process.exit();
})();
```

구름에서 제공되는 입력 코드가 2가지라고 했었는데, 잘 보면 사실상 case 1과 2가 거의 동일하다.  
단지 rl.on 이 for await으로 바뀐 느낌이지 않은가? 나머지 케이스도 동일하기에 생략한다.

여기까지 **구름**에서 입력 받는 부분의 코드 내용들이 모두 끝났다.

> 사실 팁이 하나 있다. 구름 코테 환경에는 테스트 케이스 파일을 채점서버에서 마지막까지 읽게 되면 eof가 호출되면서 자동으로 프로세스가 종료된다. 따라서 종료(rl.close() 호출)를 위한 코드는 필요가 없으며, 관련 코드는 제거해도 잘 동작한다.

## 백준

### 한줄 입력

```jsx
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

console.log(input);
```

### 여러줄 입력

```jsx
const solution = (N, data) => {
  console.log(N);
  console.log(data);
};

let fs = require('fs');
let input = fs.readFileSync('test').toString().split('\n');

const N = +input[0];
const data = [];
for (let i = 1; i < N + 1; i++) {
  // 위에서 N을 받을떄 input[0]이 빠져나갔기 때문에 1~N을 받아야한다.
  data.push(input[i].split(' ').map((el) => +el));
}

solution(N, data);
```

### 여러줄 입력 (+info)

```jsx
const solution = (N, info, data) => {
  console.log(N);
  const [X, Y] = info;
  console.log(X, Y);
  console.log(data);
};

let fs = require('fs');
let input = fs.readFileSync('test2').toString().split('\n');

const N = +input[0];
const info = input[1].split(' ').map((el) => +el);
const data = [];
for (let i = 2; i < N + 2; i++) {
  // 위에서 N과 info를 받을떄 input[0], input[1]이 빠져나갔기 때문에 2~N+1을 받아야한다.
  data.push(input[i].split(' ').map((el) => +el));
}

solution(N, info, data);
```

구름과 다른듯 하지만 사실 거의 동일하다. 먼저 받을 값을 받아 넣어주고, 그 다음 index부터 data를 처리해 주는것.

> input[0], input[1]을 받고 for문 도는 부분을 좀 더 깔끔하게 처리할 수도 있을것 같습니다.
> 좋은 아이디어는 댓글로 공유해주세요😀

# 저장되는 data의 형태

지금까지 입력 코드들을 보면서 주석 처리된 data 코드들을 봤을 것이다. 이 코드는 입력되는 테스트 케이스를 각각의 다른 형태들로 저장한다.

아래에서는 저장된 data를 출력한 값을 차례대로 정리하였다. 코드의 주석을 풀어 원하는 형태로 사용하면 된다.

## 한줄 입력

입력 → 출력

`data.push(line);`

```
10 -> ['10']
2 3 -> ['2 3']
abcd -> ['abcd']
hello world -> ['hello world']
```

`data = line.split('').map((el) => el);`

```
10 -> ['1','0']
2 3 -> ['2', ' ' ,'3']
abcd -> ['a', 'b', 'c', 'd']
hello world -> ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
```

`data = line.split(' ').map((el) => el);`

```
10 -> ['10']
2 3 -> ['2', '3']
abcd -> ['abcd']
hello world -> ['hello', 'world']
```

`data = line.split('').map((el) => +el);`

```
10 -> [1, 0]
2 3 -> [2, 0, 3]
abcd -> [ NaN, NaN, NaN, NaN ]
hello world -> [ NaN, NaN, NaN, NaN, NaN, 0, NaN, NaN, NaN, NaN, NaN ]
```

문자열을 +el로 숫자로 변환하려 하니 NaN이 출력된다. 또한 공백은 0으로 변환된다. 주의하자.

## 여러줄 입력

한줄 입력 결과가 2차원 배열로 data에 들어가도록 구현되어있다. data.push 형태로 작성했기 때문.

아래 예시는 split(' ')에 +el을 줘서 숫자로 받은 결과이다.

`data = line.split(' ').map((el) => +el);`

```
1 2 3
3 4 5
5 6 7

->

[
  [1,2,3],
  [3,4,5],
  [5,6,7]
]
```

나머지 케이스들도 한줄 입력에서 확장된 형태로 위와 같이 저장된다.

자 여기까지 읽었다면, 이제는 어떻게 입력을 받아야 하는지 감이 올 것이다.
맨 앞에서 이야기한 이 테스트케이스를 입력받는 코드도 작성할 수 있지 않을까?

```
2
5 3
1 0 0 1 0
0 0 0 0 1
0 0 1 1 0
0 0 1 0 0
1 0 0 0 0
5 2
0 0 0 1 0
1 1 0 0 0
1 0 0 0 0
0 0 0 1 1
0 0 0 1 0
```

나머지는 직접 테스트 해보면서 익혀보시길 바란다!

# 마무리

핵심 목표는 조건문과 split을 적절히 사용해서 solution으로 값을 예쁘게 받아 쓰자는것.

# 참고

https://velog.io/@exploit017/백준Node.js-Node.js-입력-받기
https://www.acmicpc.net/help/language
https://bluehorn07.tistory.com/49
