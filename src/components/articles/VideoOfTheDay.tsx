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
  height: 321px;
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
      <SectionHeader $bgColor={"green"}>
        <h2>Il video del giorno</h2>
      </SectionHeader>
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
