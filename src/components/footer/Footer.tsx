import styled from "styled-components";
import { FooterTop } from "./FooterTop.tsx";
import FooterBottom from "./FooterBottom.tsx";

const StyledFooter = styled.footer`
  display: block;
  background-color: ${(props) => props.theme.colors.black};
  color: white;
  padding: 0 14px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterTop />
      <FooterBottom />
    </StyledFooter>
  );
}
