import styled from "styled-components";
import PlaceHolderImage from "../../utils/PlaceHolderImage.ts";
import { ImageFormat } from "../../utils/ImageFormat.ts";
import { ArticleMeta } from "./ArticleMeta.tsx";
import { Title } from "./Title.tsx";

const StyledArticle = styled.article`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  display: block;
`;

const A = styled.a`
  display: block;
  margin-bottom: 0.8rem;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

export default function Article({ size }: { size: string }) {
  const placeHolderImage = new PlaceHolderImage(
    900,
    450,
    ImageFormat.PNG,
    "gray",
    "white",
    "Lorem Ipsum",
  );
  return (
    <StyledArticle>
      <A href={'#'}>
        <Img src={placeHolderImage.getUrl()} />
      </A>
      <ArticleMeta color={"blue"} />
      <Title $titleSize={size}>
        <a href={"#"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          vulputate neque a.
        </a>
      </Title>
    </StyledArticle>
  );
}
