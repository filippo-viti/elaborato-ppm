import HeaderNavbar from "./HeaderNavbar.tsx";
import styled from "styled-components";
import { HeaderTop } from "./HeaderTop.tsx";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1023px) {
      height: 66px;
      overflow: hidden;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderTop />
      <HeaderNavbar />
    </StyledHeader>
  );
}
