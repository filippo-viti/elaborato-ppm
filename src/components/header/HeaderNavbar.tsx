import styled from "styled-components";
import { IconButton } from "../buttons/IconButton.tsx";
import { HamburgerButton } from "../buttons/HamburgerButton.tsx";
import { LiveButton } from "../buttons/LiveButton.tsx";

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  font-weight: bold;
  border-top: 1px solid #eee;
  height: 40px;

  ${IconButton} {
    padding: 13px 8px 13px 14px;
    margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
`;

const Li = styled.li`
  margin: 0.5rem 1.5rem 0.5rem 0;
  font-size: 12px;
`;

const ButtonGroup = styled.div`
  display: flex;
  padding: 0 14px 0 0;
  align-items: center;
`;

export default function HeaderNavbar() {
  return (
    <Navbar>
      <HamburgerButton />
      <NavbarLinks />
      <NavRightButtons />
    </Navbar>
  );
}

function NavbarLinks() {
  return (
    <Nav>
      <Ul>
        <Li>
          <a href={"#"}>Lorem ipsum</a>
        </Li>
        <Li>
          <a href={"#"}>Lorem ipsum</a>
        </Li>
        <Li>
          <a href={"#"}>Lorem ipsum</a>
        </Li>
        <Li>
          <a href={"#"}>Lorem ipsum</a>
        </Li>
        <Li>
          <a href={"#"}>Lorem ipsum</a>
        </Li>
        <Li>
          <a href={"#"}>Lorem ipsum</a>
        </Li>
        <Li>
          <a href={"#"}>Lorem ipsum</a>
        </Li>
        <Li>
          <a href={"#"}>Lorem ipsum</a>
        </Li>
        <Li>
          <a href={"#"}>Lorem ipsum</a>
        </Li>
      </Ul>
    </Nav>
  );
}

function NavRightButtons() {
  return (
    <ButtonGroup>
      <NotificationsButton />
      <LiveButton />
    </ButtonGroup>
  );
}

function NotificationsButton() {
  return (
    <IconButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="17"
        viewBox="0 0 15 17"
        fill="white"
      >
        <g clipPath="url(#clip0_401_3269)">
          <path
            d="M13.64 9.42C13.05 8.91 12.72 8.18 12.72 7.4V5.22C12.72 2.34 10.38 0 7.5 0C4.62 0 2.28 2.34 2.28 5.22V7.4C2.28 8.18 1.94 8.91 1.36 9.42C0.5 10.17 0 11.25 0 12.39C0 13.14 0.61 13.75 1.36 13.75H13.64C14.39 13.75 15 13.14 15 12.39C15 11.25 14.51 10.17 13.64 9.42ZM13.1 10.07C13.77 10.66 14.15 11.5 14.15 12.39C14.15 12.67 13.92 12.9 13.64 12.9H1.36C1.08 12.9 0.85 12.67 0.85 12.39C0.85 11.49 1.24 10.64 1.92 10.06C2.69 9.39 3.14 8.42 3.14 7.4V5.22C3.13 2.81 5.09 0.85 7.5 0.85C9.91 0.85 11.87 2.81 11.87 5.22V7.4C11.87 8.42 12.31 9.39 13.1 10.07Z"
            fill="#555555"
          ></path>
          <path
            d="M9.65001 14.05H5.35001C5.20001 14.05 5.06001 14.12 4.96001 14.24C4.87001 14.36 4.83001 14.5 4.86001 14.65C5.10001 15.78 6.21001 16.59 7.50001 16.59C8.79001 16.59 9.89001 15.77 10.13 14.64C10.16 14.5 10.13 14.35 10.03 14.23C9.93001 14.11 9.79001 14.04 9.64001 14.04L9.65001 14.05ZM9.14001 14.9C8.83001 15.41 8.20001 15.75 7.51001 15.75C6.82001 15.75 6.18001 15.42 5.87001 14.9H9.15001H9.14001Z"
            fill="#555555"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_401_3269">
            <rect width="15" height="16.59" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </IconButton>
  );
}

