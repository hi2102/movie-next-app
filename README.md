# 기존의 프로젝트를 ts 와 nextjs로 컴파일

### 기존의 프로젝트

- 기존의 프로젝트는 yarn을 사용했다.
- 프론트에서 직접 fetch를 통해서 파일을 불러오는 형식이었다.
- 아래는 기존 프로젝트의 파일트리와 프로젝트이다.
  
<img width="23%" height="500px" alt="파일 트리 screen-shot" src="https://github.com/hi2102/movie-next-app/assets/71423455/31e8a3e8-c1a5-4b9a-b1e4-4b5f419de531">

<img width="76%" height="500px" alt="프로젝트 gif" src="https://github.com/hi2102/movie-next-app/assets/71423455/035bca2a-4b9f-4999-bf16-6a7324bdaad7">


### 새로운 프로젝트


- 새로운 프로젝트는 npm을 사용했고, 타입스크립트와 nextJs를 사용했다.
- 기존의 프로젝트에서와 달리 fetch 파일을 api/route.tsx 파일로 분할하여 관리했다.
- CSS로 밋밋한 부분들에 파스텔톤을 추가해 보았다.
- 새로운 기능
  - api/route.tsx 파일에서 async / await 으로 받은 fetch 데이터 중 비디오 설명 부분의 글자가 300 자가 넘을 경우 '...' 으로 화면에 표시 되도록 기능 추가
  - 화면의 최하단에서 최상단으로 이동하는 버튼 기능을 추가
- 아래는 새로운 프로젝트의 파일트리 구조와 프로젝트이다.

<img width="auto" height="auto" alt="파일 트리 screen-shot" src="https://github.com/hi2102/movie-next-app/assets/71423455/f14b99c0-a5c2-43bf-9915-330c3fdf6d9a">

<img width="100%" height="100%" alt="프로젝트 gif" src="https://github.com/hi2102/movie-next-app/assets/71423455/2299283e-06e7-4bc7-97d7-ab4095794c53">


###### 기존의 프로젝트를 컴파일하면서 라이브러리의 편리함을 많이 느끼는 프로젝트였다. 
###### 리액트만 사용했을때보다 라우팅이 너무 편리해서 자주 사용하고 있다.
###### 프레임워크에 길들여? 지다보니 기초적인 문법들이 가끔 떠오르지 않는 단점이 있었다.
###### 구글링과 공식문서를 통해서 문제를 해결하다보니 많은 도움이 됐다!
