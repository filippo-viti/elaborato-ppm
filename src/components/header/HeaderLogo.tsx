import PlaceHolderImage from "../../utils/PlaceHolderImage.ts";
import {ImageFormat} from "../../utils/ImageFormat.ts";
import styled from "styled-components";

const StyledHeaderLogo = styled.div`
    border-right: 1px solid #eee;
    margin-right: 1.75rem;
`;

export default function HeaderLogo() {
  const logo = new PlaceHolderImage(320, 60, ImageFormat.SVG, "FFFFFF", "FF0000", "Lorem Ipsum");
  return (
    <StyledHeaderLogo>
      <a href={'#'}>
        <img src={logo.getUrl()} alt="Logo"/>
      </a>
    </StyledHeaderLogo>
  );
}