/*
- React.js는 어떤 기술이며 왜 활용되나요?

페이스북이 개발한 프론트엔드를 위한 자바스크립트 라이브러리이며, 복잡하고 대규모 웹서비스의 UI를 좀 더 빠르고 편하게 개발할수 있도록 만들어진 기술입니다.

컴포넌트 기반으로 UI를 구성하기 때문에 유지보수가 뛰어나며, 화면 업데이트 구현이 쉽습니다. 특히 버츄얼DOM이라는 리액트만의 가상DOM 이용으로 인해 업데이트 성능이 좋습니다

​

- React App은 어떻게 생성할 수 있나요?

Vite를 사용하여 React App을 설치하는것이 간편합니다

터미널에 npm create vite@latest 입력 -> npm install 혹은 npm i 입력하여 node_modules와 package-lock.json을 설치해줍니다.

​

- React App은 어떻게 구동되나요?

vite를 통해 생성한 react app에는 웹서버가 내장되어 있습니다. npm run dev 명령어를 통해 리액트 서버를 가동시키면 리액트 서버에 접속할수 있게 됩니다. 접속하게 되면 index.html이라는 파일을 브라우저에 보내주게 되는데 해당 파일에서 main.jsx가 실행되고 main.jsx 파일내의 App.jsx 컴퍼넌트에서 app함수가 리턴하는 요소를 화면에 렌더링 시켜주고있습니다.

​
*/