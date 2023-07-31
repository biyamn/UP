# wiggle-wiggle

필수과제와 선택과제 구현하기(1~3단계 또는 1~4단계)

### 배포 URL

### 기술 스택 및 라이브러리

- HTML/CSS, JavaScript(확정)
- React.js(확정)
- styled-components(확정)
- framer-motion
- chakra-ui
- mojs(확정)

### 구현 기능 목록

- [x] 전체적인 레이아웃 구현
  - [x] 상단에 풍선 이미지 추가(svg)
  - [x] 중앙에 집 이미지 추가(png)
  - [x] 하단에 구름 이미지 추가(png)
  - [x] 배경색 추가
- [x] 주요 요소 구현
  - [x] 풍선 여러개 배치
  - [x] 풍선을 클릭하면 풍선 삭제
    - [x] 풍선이 1개일 때 풍선 삭제
    - [x] 풍선이 여러개일 때 풍선 삭제
    - [x] 삭제시 다른 풍선에 영향 안받도록 변경
    - [x] burst 효과 후 지워지지 않은 DOM 삭제
  - [x] 가운데 집을 클릭하면 풍선 추가
    - [x] 풍선 고정된 위치에 추가
    - [x] 풍선 랜덤한 위치에 추가
    - [x] 풍선이 굴뚝에서 뻗어나오도록 구현(기울기)
  - [x] 풍선이 추가될 때 풍선의 색 랜덤하게 변경
  - [ ] 풍선이 추가될 때 풍선의 모양 랜덤하게 변경
- [ ] 인터랙션 요소 구현
  - [ ] 풍선 floating 기능 추가
  - [x] 풍선 burst 기능 추가
  - [ ] 풍선 터질 시 효과음
  - [x] 각 풍선에 줄 추가
  - [ ] 풍선 당기고 놓기 기능 추가
- [ ] 환경 요소 구현
  - [ ] 하늘 배경 이미지 추가
  - [ ] 배경 이미지에 움직이는 구름 추가

### 레퍼런스

- [ ] https://codesandbox.io/examples/package/react-floating-balloons(CSS)
- [ ] https://codepen.io/Jemimaabu/pen/vYEYdOy(CSS)
- [ ] https://codesandbox.io/s/dank-pond-ppl0nk?file=/src/App.tsx(리액트 라이브러리)
- [ ] https://www.geeksforgeeks.org/css-floating-animation/(CSS Floating)
- [ ] https://yrnana.dev/post/2021-02-13-framer-motion-react-motion-gesture/(framer-motion 라이브러리)
- [ ] https://www.framer.com/motion/(framer-motion 공식 라이브러리)
- [ ] https://www.jsdelivr.com/package/npm/react-single-balloon(react-single-balloon 라이브러리)
- [ ] https://github.com/amitvchaudhary/react-single-balloon(react-single-balloon 라이브러리 소스코드)
- [ ] https://mojs.github.io/tutorials/burst/#burst-2(mo.js Burst)
  - [ ] https://github.com/mojs/mojs/issues/11(element remove 관련 이슈)
- [ ] https://cssgradient.io/(CSS 그라데이션)
- [ ] https://github.com/davidmerfield/randomColor(randomcolor 라이브러리)

### 로그

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
    - 풍선 랜덤한 위치에 추가 기능
    - 선택한 풍선 삭제 기능
    - mo.js Burst 효과 적용
    -
- 2023/07/31
  - 레퍼런스 조사
    - React Confetti Explosion 라이브러리
  - 주요 요소 구현
    - 풍선이 추가될 때 풍선의 모양 랜덤하게 변경
  - ## 인터랙션 구현
  - 시행착오
    - mo.js 라이브러리 오류 해결
