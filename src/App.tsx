import Header from "./components/header/Header.tsx";
import HeroImage from "./components/HeroImage.tsx";
import MainArticle from "./components/MainArticle.tsx";
import styled, {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'encode_sansblack';
        src: url('../fonts/encodesans-black.woff2') format('woff2'),
        url('../fonts/encodesans-black.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'encode_sansbold';
        src: url('../fonts/encodesans-bold.woff2') format('woff2'),
        url('../fonts/encodesans-bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'encode_sansextrabold';
        src: url('../fonts/encodesans-extrabold.woff2') format('woff2'),
        url('../fonts/encodesans-extrabold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'encode_sansregular';
        src: url('../fonts/encodesans-regular.woff2') format('woff2'),
        url('../fonts/encodesans-regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'encode_sanssemibold';
        src: url('../fonts/encodesans-semibold.woff2') format('woff2'),
        url('../fonts/encodesans-semibold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    :root {
        --font-black: "encode_sansblack", Arial, serif;
        --font-bold: "encode_sansbold", Arial, serif;
        --font-extrabold: "encode_sansextrabold", Arial, serif;
        --font-regular: "encode_sansregular", Arial, serif;
        --font-semibold: "encode_sanssemibold", Arial, serif;
    }

    body {
        background-color: #DDDDDD;
        color: #282828;
        margin: 0;
        font-family: var(--font-regular);
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
      <GlobalStyle/>
      <Content>
        <Header/>
        <HeroImage/>
        <MainArticle/>
      </Content>
    </>
  )
}

export default App
