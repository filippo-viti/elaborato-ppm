import { Button } from "../buttons/Button.tsx";
import styled from "styled-components";
import { IconButton } from "../buttons/IconButton.tsx";

const ButtonGroup = styled.div`
  display: flex;
  padding-right: 5px;
`;

const StyledSearchButton = styled(IconButton)`
  @media screen and (max-width: 480px){
    display: none;
  }
`

function SearchButton() {
  return (
    <StyledSearchButton>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
          d="M14.301 13.91l-2.57-2.627a6.173 6.173 0 001.592-4.107A6.178 6.178 0 007.148 1C3.738 1 1 3.766 1
            7.176c0 3.409 2.766 6.175 6.148 6.175 1.23 0 2.375-.363 3.353-1.006L13.156 15l1.145-1.09zM2.65 7.176a4.526
            4.526 0 014.527-4.527c2.487 0 4.527 2.04 4.527 4.527s-2.04 4.527-4.527 4.527c-2.515-.028-4.527-2.04-4.527-4.527z"
        ></path>
      </svg>
    </StyledSearchButton>
  );
}

const StyledProfileButton = styled(IconButton)`
  @media screen and (min-width: 480px) and (max-width: 1023px) {
    display: none;
  }
`

function ProfileButton() {
  return (
    <StyledProfileButton>
      <svg xmlns={"https://www.w3.org/2000/svg"} viewBox="0 0 32 32">
        <path
          d="M24.998 16.5416C28.0433 13.4964 28.0433 8.55912 24.998 5.5139C21.9528 2.46867 17.0155 2.46867 13.9703 5.51389C10.9251 8.55912 10.9251 13.4964 13.9703 16.5416C17.0155 19.5868 21.9528 19.5868 24.998 16.5416Z"
          fill="#666666"
        ></path>
        <path
          d="M19.484 20.6455H19.4771C16.9411 20.6439 14.5366 19.6346 12.7067 17.8048C10.8764 15.9745 9.86764 13.57 9.86603 11.0344C9.864 8.4628 10.8647 6.04496 12.6833 4.22642C14.5002 2.4095 16.9152 1.40918 19.4844 1.40918H19.4912C22.0272 1.4108 24.4317 2.42002 26.2616 4.24989C28.0919 6.08016 29.1007 8.48465 29.1023 11.0202C29.1039 13.5919 28.1036 16.0097 26.2851 17.8282C24.4682 19.6452 22.0531 20.6455 19.484 20.6455ZM19.484 5.0499C17.8872 5.0499 16.3863 5.67146 15.2573 6.80086C14.1271 7.93108 13.5055 9.43357 13.5067 11.032C13.5092 14.2676 16.2443 17.0027 19.4799 17.0052H19.4844C21.0812 17.0052 22.582 16.3836 23.711 15.2546C24.8412 14.1244 25.4628 12.6219 25.4616 11.0235C25.4592 7.78783 22.7241 5.05273 19.4884 5.05031L19.484 5.0499Z"
          fill="#666666"
        ></path>
        <path
          d="M19.484 25.3616C19.3682 25.3616 19.2529 25.362 19.1376 25.3632C9.53095 25.4591 1.82016 33.3354 1.82016 42.9424V45.2898C1.82016 46.8858 3.11426 48.1799 4.71024 48.1799H34.2577C35.8537 48.1799 37.1477 46.8858 37.1477 45.2898V42.9424C37.1477 33.3354 29.4366 25.4595 19.8303 25.3632C19.715 25.362 19.5997 25.3616 19.484 25.3616Z"
          fill="#666666"
        ></path>
        <path
          d="M34.2577 50H4.71023C2.11313 50 0 47.8868 0 45.2897V42.9423C0 40.3504 0.50299 37.8314 1.49562 35.4549C2.45507 33.1572 3.82848 31.0898 5.57863 29.3101C9.18496 25.6427 13.9935 23.5943 19.1198 23.5433C19.3621 23.5409 19.6062 23.5409 19.849 23.5433C24.9748 23.5947 29.7837 25.6427 33.3897 29.3101C35.1398 31.0902 36.5136 33.1576 37.4727 35.4549C38.4649 37.8314 38.9683 40.3509 38.9683 42.9423V45.2897C38.9683 47.8868 36.8548 50 34.2577 50ZM19.484 27.1816C19.3747 27.1816 19.2654 27.182 19.1562 27.1832C10.6009 27.2686 3.64072 34.338 3.64072 42.9419V45.2893C3.64072 45.8793 4.12064 46.3588 4.71023 46.3588H34.2577C34.8477 46.3588 35.3276 45.8789 35.3276 45.2893V42.9419C35.3276 34.338 28.3674 27.2686 19.8121 27.1832C19.7029 27.182 19.5936 27.1816 19.484 27.1816Z"
          fill="#666666"
        ></path>
      </svg>
    </StyledProfileButton>
  );
}

const SubscribeButton = styled(Button)`
  @media screen and (max-width: 480px){
    display: none;
  }
`

const ReadNewspaperButton = styled(Button)`
  @media screen and (max-width: 1023px){
    display: none;
  }
`

export function HeaderTopButtons() {
  return (
    <ButtonGroup>
      <SubscribeButton $btnColor={"lightGreen"} $btnShadow={"lightGreenShadow"} as={"a"}>
        Abbonati
      </SubscribeButton>
      <ReadNewspaperButton $btnColor={"black"} $btnShadow={"blackShadow"} as={"a"}>
        Leggi il giornale
      </ReadNewspaperButton>
      <SearchButton />
      <ProfileButton />
    </ButtonGroup>
  );
}
