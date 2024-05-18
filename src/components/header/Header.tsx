import HeaderNavbar from "./HeaderNavbar.tsx";
import styled from "styled-components";
import { HeaderTop } from "./HeaderTop.tsx";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderTop />
      <HeaderNavbar />
    </StyledHeader>
  );
}
