import styled from "styled-components";
import PlaceHolderImage from "../../utils/PlaceHolderImage.ts";
import { ImageFormat } from "../../utils/ImageFormat.ts";

const Img = styled.img`
  max-height: 250px;
  max-width: 980px;
  width: 100%;
  height: auto;
  display: flex;
  margin: 0 auto 20px;
  text-align: center;
  overflow: visible;
`;

export default function TopBarAd() {
  const placeHolderAd = new PlaceHolderImage(
    970,
    250,
    ImageFormat.PNG,
    "gray",
    "white",
    "Lorem Ipsum",
  );
  return <Img src={placeHolderAd.getUrl()} />;
}
