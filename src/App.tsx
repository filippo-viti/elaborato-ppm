import './App.css'
import Header from "./components/header/Header.tsx";
import HeroImage from "./components/HeroImage.tsx";
import MainArticle from "./components/MainArticle.tsx";
import styled from "styled-components";

const Content = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    background-color: white;
`;

function App() {
  return (
    <Content>
      <Header/>
      <HeroImage/>
      <MainArticle/>
    </Content>
  )
}

export default App
