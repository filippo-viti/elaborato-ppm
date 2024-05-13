import Header from "./components/header/Header.tsx";
import HeroImage from "./components/HeroImage.tsx";
import MainArticle from "./components/MainArticle.tsx";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {

    }

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
    }

    svg {
        height: 16px;
        width: 16px;
        vertical-align: middle;
    }
`;

const Content = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  background-color: white;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Content>
        <Header />
        <HeroImage />
        <MainArticle />
      </Content>
    </>
  );
}

export default App;
