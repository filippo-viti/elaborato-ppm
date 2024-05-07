import HeaderLogo from "./HeaderLogo.tsx";
import {HeaderTopButtons} from "./HeaderTopButtons.tsx";
import TodayDate from "./TodayDate.tsx";
import styled from "styled-components";

const StyledHeaderTop = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
`;

const LogoBox = styled.div`
    display: flex;
    padding: 14px;
    align-items: center;
`;

export function HeaderTop() {
  return (
    <StyledHeaderTop>
      <LogoBox>
        <HeaderLogo/>
        <TodayDate/>
      </LogoBox>
      <HeaderTopButtons/>
    </StyledHeaderTop>
  );
}