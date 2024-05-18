import HeaderLogo from "./HeaderLogo.tsx";
import { HeaderTopButtons } from "./HeaderTopButtons.tsx";
import TodayDate from "./TodayDate.tsx";
import styled from "styled-components";

const StyledHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    height: 66px;
    overflow: hidden;
  }
`;

const LogoBox = styled.div`
  display: flex;
  padding: 14px 0 14px 14px;
  align-items: center;
`;

export function HeaderTop() {
  return (
    <StyledHeaderTop>
      <LogoBox>
        <HeaderLogo />
        <TodayDate />
      </LogoBox>
      <HeaderTopButtons />
    </StyledHeaderTop>
  );
}
