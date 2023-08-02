# 🎈 UP! 🏠

<div align="center">
  <img src='https://github.com/biyamn/UP/assets/101965666/3ce51289-5c08-405e-bab1-09005a08db76' width="50%"/>
  <h4>배포 링크: https://uuuup.vercel.app</h4>
</div>

<br>

## UP 소개

<a href='https://ko.wikipedia.org/wiki/%EC%97%85_(2009%EB%85%84_%EC%98%81%ED%99%94)'>영화 UP</a>을 모티브로 한 웹입니다. 집에 풍선을 달면 집에 달린 풍선의 양만큼 하늘 위로 떠오르고, 반대로 풍선을 터뜨리거나 날리면 없어진 풍선의 양만큼 아래로 내려갑니다.

<br>

## 기능 소개

### 풍선 달기

- 집을 누르면 랜덤한 모양과 색의 풍선이 굴뚝 위에 하나씩 추가됩니다.
- css animation을 사용하여 풍선이 둥둥 떠있는 듯한 효과를 구현했습니다.
- randomcolor 라이브러리를 사용하여 풍선의 랜덤한 색을 구현했습니다.
- 풍선은 최대 20개를 달 수 있습니다.

| ![풍선 달기](https://github.com/biyamn/UP/assets/101965666/a41170f9-f073-485a-990b-f82a5a47d582) |
| :----------------------------------------------------------------------------------------------: |
|                                            풍선 달기                                             |

### 풍선 드래그하기

- 풍선을 당겼다가 놓을 수 있으며, 놓을 시 제자리로 돌아갑니다.
- 풍선을 당기면 풍선 크기가 줄어들고 놓으면 기존의 크기로 돌아갑니다.
- framer-motion 라이브러리의 drag 기능을 사용하여 풍선 드래그 기능을 구현했습니다.

| ![풍선 드래그](https://github.com/biyamn/UP/assets/101965666/e0b04f74-28e7-44f1-827e-1efd2807ab23) |
| :------------------------------------------------------------------------------------------------: |
|                                          풍선 드래그하기                                           |

### 풍선 터뜨리기

- 집 하단의 **`터뜨리기`** 버튼을 누르면 풍선 터뜨리기 모드로 전환되며, 풍선 클릭 시 풍선을 터뜨릴 수 있습니다.
- mo.js 라이브러리의 burst 기능을 사용하여 풍선이 터지는 듯한 효과를 구현했습니다.

| ![풍선 터뜨리기](https://github.com/biyamn/UP/assets/101965666/cd5c2cad-1b6c-415e-86f1-3e7a9770fc4b) |
| :--------------------------------------------------------------------------------------------------: |
|                                            풍선 터뜨리기                                             |

### 풍선 날리기

- 집 하단의 **`날리기`** 버튼을 누르면 풍선 날리기 모드로 전환되며, 풍선 클릭 시 풍선을 하늘로 날릴 수 있습니다.
- framer-motion 라이브러리의 AnimatePresence 컴포넌트를 사용하여 풍선이 날아가는 듯한 효과를 구현했습니다.

| ![풍선 날리기](https://github.com/biyamn/UP/assets/101965666/225074c2-687d-477e-9cbf-d4f451e659d9) |
| :------------------------------------------------------------------------------------------------: |
|                                            풍선 날리기                                             |

### 집 움직이기

- 집에 달린 풍선의 개수가 늘어날수록 집이 하늘 위로 떠오르고, 개수가 적어질수록 아래로 내려갑니다.

| ![집 움직이기](https://github.com/biyamn/UP/assets/101965666/21504f3a-e519-44df-a463-37034a6f8638) |
| :------------------------------------------------------------------------------------------------: |
|                                            집 움직이기                                             |

<br>

## 기술 스택 및 라이브러리

- 핵심 기술: React.js, JavaScript, styled-components
- 라이브러리: framer-motion, mo.js

<br>

## 실행방법

1. 프로젝트를 클론합니다.

   ```
   git clone https://github.com/biyamn/UP.git
   ```

2. 클론한 프로젝트 내부로 이동합니다.

   ```
   cd UP
   ```

3. 의존 패키지를 설치합니다.

   ```
   npm install
   ```

4. 프로젝트를 시작합니다.

   ```
   npm run dev
   ```

<br>

## 폴더구조

```
📦src
├─ 📂components
│  ├─ 📜Balloons.jsx
│  └─ 📜BalloonSVG.jsx
├─ 📂styles
│  ├─ 📜font.css
│  ├─ 📜index.css
│  └─ 📜reset.css
├─ 📂utils
│  ├─ 📜getRandomColor.js
│  ├─ 📜getRandomDegree.js
│  ├─ 📜getRandomShape.js
│  └─ 📜index.js
├─ 📜main.jsx
└─ 📜App.jsx
```

<br>

## 레퍼런스

<details>
<summary>레퍼런스</summary>
<div>

- CSS로 구현한 floating 기능 예시 모음: https://codesandbox.io/examples/package/react-floating-balloons
- CSS로 구현한 floating 기능 특정 예시: https://codepen.io/Jemimaabu/pen/vYEYdOy
- react-single-balloon 라이브러리 예시: https://codesandbox.io/s/dank-pond-ppl0nk?file=/src/App.tsx
- react-single-balloon 라이브러리 소스코드: https://github.com/amitvchaudhary/react-single-balloon
- framer-motion 라이브러리 drag 기능: https://www.framer.com/motion/gestures/#drag
- framer-motion 라이브러리 AnimatePresence 컴포넌트: https://www.framer.com/motion/animate-presence
- mo.js 라이브러리 Burst 기능: https://mojs.github.io/tutorials/burst
  - remove DOM 관련 이슈: https://github.com/mojs/mojs/issues/11
- randomcolor 라이브러리: https://github.com/davidmerfield/randomColor=
- forwardRef eslint 관련 오류: https://pottatt0.tistory.com/entry/eslint-ERROR-forwardRef-Component-definition-is-missing-display-nameeslintreactdisplay-name
- CSS 버튼 스타일링: https://inpa.tistory.com/entry/CSS-%F0%9F%92%8D-%EB%B2%84%ED%8A%BC-%EB%94%94%EC%9E%90%EC%9D%B8-%EB%AA%A8%EC%9D%8C

</div>
</details>

<br>

## 구현 기능 목록

<details>
<summary>구현 기능 목록</summary>
<div>

- [x] 전체적인 레이아웃 구현
  - [x] 상단에 풍선 이미지 추가
  - [x] 중앙에 집 이미지 추가
  - [x] 하단에 구름 이미지 추가
  - [x] 배경 이미지 추가
- [x] 주요 요소 구현
  - [x] 풍선을 클릭하면 풍선 삭제
    - [x] 풍선이 1개일 때 풍선 삭제
    - [x] 풍선이 여러개일 때 풍선 삭제
    - [x] 삭제시 다른 풍선에 영향 안받도록 변경
    - [x] burst 효과 후 지워지지 않은 DOM 삭제
  - [x] 가운데 집을 클릭하면 풍선 생성
    - [x] 풍선 고정된 위치(굴뚝)에 생성
    - [x] 풍선들이 모아지는 중심점 생성
    - [x] 집 뒤에 풍선 위치시키기
    - [x] 풍선 랜덤한 기울기로 생성
  - [x] 풍선이 추가될 때 풍선의 색 랜덤하게 변경
  - [x] 풍선이 추가될 때 풍선의 모양 랜덤하게 변경
  - [x] 터뜨리기/날리기 모드 구현
    - [x] 터뜨리기 버튼, 날리기 버튼 추가
    - [x] 선택된 모드를 구분 가능하도록 버튼 스타일링
- [x] 인터랙션 요소 구현
  - [x] 풍선 floating 기능(수직) 구현
  - [x] 풍선 드래그 기능 구현
  - [x] 풍선 burst 기능 구현
  - [x] 풍선 위로 날리기 기능 구현
  - [x] 풍선 개수에 따라 집 상하 이동 구현
    - [x] 풍선 20개 제한
- [x] 환경 요소 구현
  - [x] 하늘 배경 이미지 추가
  - [x] 구름 floating 기능(수평) 구현
- [x] 코드 리팩토링
  - [x] 컴포넌트 분리
  - [x] styles 파일 분리
  - [x] utils 파일 분리

</div>
</details>

<br>

## 로그

<details>
<summary>구현 로그</summary>
<div>

- 2023/07/29
  - 레퍼런스 조사
    - framer-motion 라이브러리
  - 전체적인 레이아웃 구현
    - 상단에 풍선 이미지 추가(svg)
    - 중앙에 집 이미지 추가(png)
    - 하단에 구름 이미지 추가(png)
    - 배경색 추가
- 2023/07/30
  - 레퍼런스 조사
    - react-single-balloon 라이브러리
    - mo.js 라이브러리
    - css gradient
    - randomcolor 라이브러리
  - 주요 요소 구현
    - 풍선 랜덤한 위치에 추가하는 기능 구현
    - 선택한 풍선 삭제 기능
    - mo.js Burst 효과 적용
- 2023/07/31
  - 레퍼런스 조사
    - React Confetti Explosion 라이브러리
  - 주요 요소 구현
    - 폰트 추가
  - 인터랙션 구현
    - 풍선 floating 기능(수직) 구현
    - 구름 floating 기능(수평) 구현
  - 시행착오
    - burst 효과 후 남은 DOM 잔류 오류 해결(mo.js 라이브러리 onComplete 옵션)
    - floating 구현: transform과 animation을 함께 쓰기
- 2023/08/01
  - 코드 리팩토링
    - styles 파일 분리
    - utils 파일 분리
    - 컴포넌트 분리
  - 주요 요소 구현
    - 풍선 고정된 위치(굴뚝)에 생성
  - 인터랙션 구현
    - 풍선 드래그 기능 구현
  - 시행착오
    - 풍선 위치 고정: position(relative, absolute)
- 2023/08/02
  - 인터랙션 구현
    - 풍선 날리기 기능 구현
      - 터뜨리기/날리기 버튼 추가
      - 선택된 모드를 구분 가능하도록 버튼 스타일링
      - 가위 모드로 전환시 풍선 날리기 기능 구현
      - 풍선줄을 자르면 풍선이 날아가는 효과 구현
    - 풍선 개수에 따라 집 상하 이동
      - 풍선 20개 제한
  - 시행착오
    - 풍선 드래그 버그 해결(framer-motion 라이브러리 dragSnapToOrigin 옵션)

</div>
</details>
