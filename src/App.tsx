import Header from "./components/header/Header.tsx";
import HeroImage from "./components/HeroImage.tsx";
import MainArticle from "./components/MainArticle.tsx";
import styled, { createGlobalStyle } from "styled-components";
import LiveTracker from "./components/live-tracker/LiveTracker.tsx";
import VideoOfTheDay from "./components/VideoOfTheDay.tsx";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #DDDDDD;
        color: #282828;
        margin: 0;
        font-family: "Encode Sans", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-variation-settings: "wdth" 100;
    }

    a {
        text-decoration: none;
        color: #282828;
    }
`;

const Content = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  background-color: white;
`;

const Articles = styled.div`
  padding: 0 14px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Content>
        <Header />
        <HeroImage />
        <Articles>
          <MainArticle />
          <LiveTracker />
          <VideoOfTheDay />
        </Articles>
      </Content>
    </>
  );
}

export default App;
