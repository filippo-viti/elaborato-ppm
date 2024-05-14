import styled from "styled-components";
import PlaceHolderImage from "../utils/PlaceHolderImage.ts";
import { ImageFormat } from "../utils/ImageFormat.ts";
import { ArticleMeta } from "./ArticleMeta.tsx";

const Container = styled.div`
  background: #282828;
  padding: 0 14px;
  border: 5px solid #43b21c;
  margin-bottom: 2rem;
  height: 321px;
`;

const Header = styled.header`
  margin-top: 1.3rem !important;
  padding: 0 !important;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  position: relative;
`;

const Heading = styled.h2`
  display: inline-block;
  padding: 6px 12px;
  position: relative;
  text-transform: uppercase;
  margin-right: 1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 900;
  font-size: 16px;
  line-height: 18px;
  color: white;
  transform: matrix(1, -0.05, 0, 1, 0, 0);
  box-sizing: border-box;
  box-shadow:
    2px 2px 0 #fff,
    8px 8px 12px rgba(0, 0, 0, 0.1);
  background-color: #43b21c !important;
`;

const Content = styled.div`
  height: auto;
  display: flex;
  width: 100%;
  gap: 0 0;
  flex: 2 1 0;
  position: relative;
  margin: 0 1rem 0.2rem 0;
  justify-content: start;
`;

const VideoWrapper = styled.div`
  margin: 0 1rem 0.2rem 0;
  max-width: 100%;
  height: auto;
  flex: 1 1 0;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
`;
const ArticleTitleContainer = styled.div`
  flex: 1 1;
`;
const ArticleTitle = styled.h2`
  margin: 0 0 1.75rem;
  font-size: 38px;
  line-height: 1.15;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: white;

  &:hover {
    text-decoration: underline;
  }

  > a {
    color: white;
  }
`;

export default function VideoOfTheDay() {
  const placeholderPoster = new PlaceHolderImage(
    1920,
    1080,
    ImageFormat.SVG,
    "gray",
    "white",
    "Lorem Ipsum",
  );
  return (
    <Container>
      <Header>
        <Heading>Il video del giorno</Heading>
      </Header>
      <Content>
        <VideoWrapper>
          <Video poster={placeholderPoster.getUrl()} controls></Video>
        </VideoWrapper>
        <ArticleTitleContainer>
          <ArticleMeta color={"#43b21c;"} />
          <ArticleTitle>
            <a href={"#"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </a>
          </ArticleTitle>
        </ArticleTitleContainer>
      </Content>
    </Container>
  );
}
