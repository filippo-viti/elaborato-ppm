import styled from "styled-components";
import PlaceHolderImage from "../../utils/PlaceHolderImage.ts";
import { ImageFormat } from "../../utils/ImageFormat.ts";

const Img = styled.img`
  flex: 0 0 300px;
  width: 300px;
  position: sticky;
  top: 100px;
  height: 100%;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export default function SidebarAd() {
  const placeHolderAd = new PlaceHolderImage(
    300,
    720,
    ImageFormat.PNG,
    "gray",
    "white",
    "Lorem Ipsum",
  );
  return <Img src={placeHolderAd.getUrl()} />;
}
