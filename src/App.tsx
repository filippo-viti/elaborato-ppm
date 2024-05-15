import Header from "./components/header/Header.tsx";
import HeroImage from "./components/HeroImage.tsx";
import MainArticle from "./components/articles/MainArticle.tsx";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import LiveTracker from "./components/live-tracker/LiveTracker.tsx";
import SidebarAd from "./components/ads/SidebarAd.tsx";
import TopBarAd from "./components/ads/TopBarAd.tsx";
import VideoOfTheDay from "./components/articles/VideoOfTheDay.tsx";
import Article from "./components/articles/Article.tsx";
import { SectionHeader } from "./components/articles/SectionHeader.tsx";

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

const theme = {
  colors: {
    lightGreen: "#47C072",
    lightGreenShadow: "#C6EBD4",
    black: "#282828",
    blackShadow: "#BDBDBD",
    blue: "#4984B8",
    gray: "#AAAAAA",
    orange: "#FA4224",
    orangeShadow: "#FDC5BC",
    green: "#43B21C",
    red: "#8B351D",
  },
  titleSizes: {
    big: {
      fontSize: "38px",
      lineHeight: "42px",
    },
    medium: {
      fontSize: "24px",
      lineHeight: "28px",
    },
    small: {
      fontSize: "16px",
      lineHeight: "20px",
    },
  },
};

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
      <ThemeProvider theme={theme}>
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
                <SectionHeader $bgColor={"red"}>
                  <h2>In copertina</h2>
                </SectionHeader>
                <Article size={"big"} />
              </LeftColumn>
              <SidebarAd />
            </Articles>
          </Content>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
