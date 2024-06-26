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
import ArticleGrid from "./components/articles/ArticleGrid.tsx";
import Footer from "./components/footer/Footer.tsx";
import HeaderScrolled from "./components/header/HeaderScrolled.tsx";
import { useEffect, useState } from "react";

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
    white: "white",
    whiteShadow: "#696969",
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
  @media screen and (min-width: 2560px) and (max-width: 5120px) {
    width: 1890px;
  }
  @media screen and (max-width: 1512px) {
    max-width: 1134px;
  }
  @media screen and (max-width: 1439px) {
    max-width: 1018px;
  }
  @media screen and (max-width: 1023px) {
    max-width: 100%;
  }
  @media screen and (max-width: 480px){
    max-width: 100%;
  }
  width: 1270px;
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
  @media screen and (min-width: 2560px) and (max-width: 5120px) {
      flex: 0 0 1537px;
      width: 1537px;
  }
  @media screen and (max-width: 1512px) {
      flex: 0 0 766px;
      width: 766px;
  }
  @media screen and (max-width: 1439px) {
      flex: 0 0 650px;
      width: 650px;
  }
  @media screen and (max-width: 1023px) {
      flex: 1 1 100%;
      width: 100%;
  }
  flex: 0 0 906px;
  width: 906px;
`;

function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [videoPlayerScrolled, setVideoPlayerScrolled] = useState(false);
  const [mediumScreen, setMediumScreen] = useState(window.innerWidth < 1024);
  const [mobileScreen, setMobileScreen] = useState(window.innerWidth <= 480);

  const handleScroll = () => {
    setHeaderScrolled(window.scrollY > 90);
    setVideoPlayerScrolled(window.scrollY > 2000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResize = () => {
    setMediumScreen(window.innerWidth < 1024)
    setMobileScreen(window.innerWidth <= 480)
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <HeaderScrolled show={(headerScrolled || mediumScreen)} />
          <HeroImage />
          <Content>
            <MainArticle />
            <LiveTracker />
            <TopBarAd />
            <Articles>
              <LeftColumn>
                <VideoOfTheDay move={videoPlayerScrolled && !mobileScreen}/>
                <SectionHeader $bgColor={"red"}>
                  <h2>In copertina</h2>
                </SectionHeader>
                <Article size={"big"} />
                <ArticleGrid articleNumber={8} rowSize={2} />
                <SectionHeader $bgColor={"red"}>
                  <h2>Primo piano</h2>
                </SectionHeader>
                <Article size={"big"} />
                <ArticleGrid articleNumber={4} rowSize={2} />
                <ArticleGrid articleNumber={3} rowSize={3} />
              </LeftColumn>
              <SidebarAd />
            </Articles>
          </Content>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
