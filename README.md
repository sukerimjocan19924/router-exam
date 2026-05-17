# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🌐 Router Project  

## 📌 프로젝트 소개  
React Router 기반 프론트엔드 웹 애플리케이션으로, 사용자가 네비게이션 메뉴를 통해 `홈`, `소개`, `회사`, `게시판` 등 다양한 페이지를 이동하며 콘텐츠를 확인할 수 있는 서비스입니다.  

## ✨ 주요 기능  
- `Routes + Route`를 활용한 페이지 라우팅  
- `NavLink` 기반 활성 메뉴 스타일링  
- `useParams`를 활용한 동적 라우팅 (AboutDetail, BoardDetail)  
- `Header`, `Footer` 공통 레이아웃 구성  
- `Swiper.js`를 활용한 홈 화면 슬라이드 배너 구현  
- 잘못된 경로 접근 시 `NotFound` 페이지 처리  

## 🖼️ 구현 화면  
- 홈 화면 슬라이드 배너 (Swiper.js 적용)  
- 소개 / 회사 / 게시판 페이지 이동  
- 게시판 목록 및 상세 페이지 구조  
- 잘못된 경로 접근 시 NotFound 페이지 확인  

## 🛠️ 사용 기술  
- **Frontend**: React, JavaScript, JSX, Vite  
- **Routing**: React Router v6 (Routes, Route, NavLink, useParams)  
- **State Management**: useParams (URL 파라미터 기반 상태 관리)  
- **Styling**: CSS (Header, Footer, Home, Board 등 모듈별 분리)  
- **UI 라이브러리**: Swiper.js (홈 화면 슬라이드 배너)  
- **Deployment**: GitHub Pages / Vercel  

🔗 **실행 링크**  
👉 [Router Project GitHub](https://router-exam-blush.vercel.app/)  
