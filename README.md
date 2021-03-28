# Developer Platform Web
#### 1. npm 스크립트
- 개발 서버 실행 (3000번 포트)
```bash
$> npm run dev
```
- 빌드 (/dist 경로로 빌드)
```bash
$> npm run build
```
- 운영 서버 실행 (4000번 포트, 빌드 후 실행 가능)
```bash
$> npm start
```

<br/>

#### 2. 프로젝트 구조 (/src)
```
- /index.js : Redux Provider 사용
- /App.js : Route 처리
- /assets : Image 디렉토리
- /styles : CSS 디렉토리
- /lib : styled-components 및 라이브러리 파일 디렉토리
- /modules : Redux 모듈 (Action, Reducer)
- /pages : 메인 컴포넌트
- /components : 메인 컴포넌트에서 사용할 서브 컴포넌트 디렉토리
- /components/Common : 모든 메인 컴포넌트에서 사용할 공통 컴포넌트
- /components/** : 서브 컴포넌트 (메인 컴포넌트와 동일한 이름의 디렉토리)
```

<br/>

#### 3. 중요 라이브러리
```
- react : 리액트 라이브러리
- @babel : ES6 문법 처리
- @material-ui : UI 라이브러리
- @emotion : UI 라이브러리
- @loadable/component : 코드 스플리팅 라이브러리
- sweetalert2 : 기존 alert 대체 라이브러리
- redux : 리덕스 라이브러리
- redux-devtools-extension : 리덕스 개발 도구
- redux-logger : 리덕스 콘솔 로그 출력
- react-router : 리액트 라우트 처리
- react-hook-form : 리액트 form validation 라이브러리
- axios : AJAX 처리
- crypto-js : 문자열 암호화 처리
- express : 웹서버 프레임워크 (운영 시 사용할 프론트 웹서버)
- cors : Cross-Origin 이슈 해결 (개발 모드에서만 사용)
```
