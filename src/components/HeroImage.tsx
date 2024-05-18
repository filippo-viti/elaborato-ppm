import PlaceHolderImage from "../utils/PlaceHolderImage.ts";
import { ImageFormat } from "../utils/ImageFormat.ts";
import styled from "styled-components";

const Figure = styled.figure`
  margin: 0;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const CaptionWrapper = styled.div`
  position: relative;
  bottom: 50px;
  padding-left: 10px;
  @media screen and (max-width: 1023px) {
      height: 48px;
      text-align: center;
      font-size: 40px;
      bottom: 40px;
  }
`;

const FigCaption = styled.figcaption`
  display: inline-block;
  font-weight: 900;
  font-size: 80px;
  @media screen and (max-width: 1023px) {
    font-size: 40px;
  }
  line-height: 1.3;
  letter-spacing: -0.02em;
  margin: -0.1em 0.1em 0 0.05em;
  text-transform: uppercase;
  transform: matrix(1, -0.05, 0, 1, 0, 0);
  background-color: ${(props) => props.theme.colors.blue};
  color: white;
  box-sizing: border-box;
  box-shadow:
    4px 4px 0 white,
    8px 8px 12px rgba(0, 0, 0, 0.1);
`;
export default function HeroImage() {
  const heroImage = new PlaceHolderImage(
    1134,
    567,
    ImageFormat.JPEG,
    "gray",
    "white",
    "Lorem ipsum",
  );
  return (
    <Figure>
      <Img src={heroImage.getUrl()} alt={"Hero image"} />
      <CaptionWrapper>
        <FigCaption>Lorem ipsum</FigCaption>
      </CaptionWrapper>
    </Figure>
  );
}
