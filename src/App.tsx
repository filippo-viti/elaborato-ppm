import Header from "./components/header/Header.tsx"
import HeroImage from "./components/HeroImage.tsx"
import MainArticle from "./components/articles/MainArticle.tsx"
import styled, {createGlobalStyle} from "styled-components"
import LiveTracker from "./components/live-tracker/LiveTracker.tsx"
import SidebarAd from "./components/ads/SidebarAd.tsx"
import TopBarAd from "./components/ads/TopBarAd.tsx"
import VideoOfTheDay from "./components/articles/VideoOfTheDay.tsx;

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

const Container = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  background-color: white;
`;

const Content = styled.div`
  padding: 0 14px;
`;

const Articles = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const LeftColumn = styled.div`
  flex: 0 0 906px;
  width: 906px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <HeroImage />
        <Content>
          <MainArticle />
          <LiveTracker />
          <TopBarAd />
          <Articles>
            <LeftColumn>
              <VideoOfTheDay />
            </LeftColumn>
            <SidebarAd />
          </Articles>
        </Content>
      </Container>
    </>
  );
}

export default App;
