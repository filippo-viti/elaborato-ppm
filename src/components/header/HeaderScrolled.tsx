import styled from "styled-components";
import { HamburgerButton } from "../buttons/HamburgerButton.tsx";
import { LiveButton } from "../buttons/LiveButton.tsx";
import { HeaderTopButtons } from "./HeaderTopButtons.tsx";
import PlaceHolderImage from "../../utils/PlaceHolderImage.ts";
import { ImageFormat } from "../../utils/ImageFormat.ts";

const HeaderScrolledWrapper = styled.header<{ $show: boolean }>`
  transform: ${(props) =>
    props.$show ? "translate(-50%, 100%)" : "translate(-50%)"};
  position: fixed;
  width: inherit;
  max-width: inherit;
  margin: 0 auto;
  z-index: 100;
  height: 68px;
  bottom: 100%;
  left: 50%;
  background-color: #fff;
  transition: transform 0.35s ease;
  border-bottom: 2px solid #e7e7e7;
  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  padding: 0 14px;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const LiveButtonWrapper = styled.div`
  border-right: 1px solid #eee;
  margin-right: 0.8rem;
  padding-right: 0.8rem;
`;

export default function HeaderScrolled({ show }: { show: boolean }) {
  const logo = new PlaceHolderImage(
    163,
    40,
    ImageFormat.SVG,
    "FFFFFF",
    "FF0000",
    "LoremIpsum.com",
  );
  return (
    <HeaderScrolledWrapper $show={show}>
      <HeaderLeft>
        <HamburgerButton />
        <img src={logo.getUrl()} alt={"logo"} />
      </HeaderLeft>
      <HeaderRight>
        <LiveButtonWrapper>
          <LiveButton />
        </LiveButtonWrapper>
        <HeaderTopButtons />
      </HeaderRight>
    </HeaderScrolledWrapper>
  );
}
