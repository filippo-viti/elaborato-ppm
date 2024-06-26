import styled from "styled-components";
import PlaceHolderImage from "../../utils/PlaceHolderImage.ts";
import { ImageFormat } from "../../utils/ImageFormat.ts";
import { ArticleMeta } from "./ArticleMeta.tsx";
import { SectionHeader } from "./SectionHeader.tsx";

const Container = styled.div`
  background: #282828;
  padding: 0 14px;
  border: 5px solid ${(props) => props.theme.colors.green};
  margin-bottom: 2rem;
  @media screen and (min-width: 2560px) and (max-width: 5120px) {
    height: 497px;
  }
  @media screen and (max-width: 768px) {
    height: 600px;
  }
  @media screen and (max-width: 480px) {
      height: 400px;
  }
  height: 321px;
`;

const Content = styled.div`
  height: auto;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  gap: 0 0;
  flex: 2 1 0;
  position: relative;
  margin: 0 1rem 0.2rem 0;
  justify-content: start;
`;

const videoWrapperProps = `
  margin: 0 1rem 0.2rem 0;
  max-width: 100%;
  height: auto;
  flex: 1 1 0;
`;

const videoScrolledProps = `
  position: fixed;
  bottom: 40px;
  right: 10px;
  z-index: 100;
  width: 400px;
  height: 225px;
`;

const VideoWrapper = styled.div<{ $move: boolean }>`
  ${(props) => (props.$move ? videoScrolledProps : videoWrapperProps)};
`;

const Video = styled.video`
  width: 100%;
  height: auto;
`;
const ArticleTitleContainer = styled.div`
  flex: 1 1;
  @media screen and (max-width: 480px) {
    margin-top: 1rem;
  }
`;
const ArticleTitle = styled.h2`
  margin: 0 0 1.75rem;
  font-size: 38px;
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
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

export default function VideoOfTheDay({ move }: { move: boolean }) {
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
      <SectionHeader $bgColor={"green"}>
        <h2>Il video del giorno</h2>
      </SectionHeader>
      <Content>
        <VideoWrapper $move={move}>
          <Video id={'video-player'} poster={placeholderPoster.getUrl()} controls></Video>
        </VideoWrapper>
        <ArticleTitleContainer>
          <ArticleMeta color={"green"} />
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
