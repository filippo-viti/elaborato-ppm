import styled from "styled-components";
import PlaceHolderImage from "../utils/PlaceHolderImage.ts";
import { ImageFormat } from "../utils/ImageFormat.ts";

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

const Title = styled.h2`
  display: inline-block;
  padding: 6px 12px;
  position: relative;
  text-transform: uppercase;
  margin-right: 1rem;
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
  gap: 0 2rem;
  flex: 2 1 0;
  position: relative;
  margin: 0 1rem 0.2rem 0;
`;

const Video = styled.video`
  margin: 0 1rem 0.2rem 0;
  max-width: 100%;
  height: auto;
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
        <Title>Il video del giorno</Title>
      </Header>
      <Content>
        <Video poster={placeholderPoster.getUrl()} controls></Video>
      </Content>
    </Container>
  );
}
