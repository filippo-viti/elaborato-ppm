import styled from "styled-components";
import PlaceHolderImage from "../../utils/PlaceHolderImage.ts";
import { ImageFormat } from "../../utils/ImageFormat.ts";
import { Button } from "../buttons/Button.tsx";

const FooterBottomWrapper = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  border-bottom: 1px solid white;
  padding: 0.5rem 0;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 0;
`;

const Link = styled.li`
  margin-right: 1rem;

  > a {
    font-size: 14px;
    line-height: 16px;
    color: white;
  }
`;

const FooterCreditsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FooterLogoWrapper = styled.div`
  margin: 1.5rem 0 1rem;
  display: flex;
  flex-direction: column;

  > span {
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.02em;
  }
`;

const FooterLogoLink = styled.a`
  color: white;
  text-decoration: none;
  background-color: transparent;

  > svg {
    width: 290px;
    height: 57px;
    display: block;
  }
`;

const FooterBottomRight = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const FooterBottomButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 0.5rem 0 1rem;
`;

const A = styled.a`
  color: white;
  font-size: 10px;
  line-height: 2;
  font-weight: bold;
  white-space: nowrap;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`;

const Svg = styled.svg`
  fill: currentColor;
  margin-left: 0.25rem;
  vertical-align: baseline;
`;

export default function FooterBottom() {
  const placeHolderLogo = new PlaceHolderImage(
    290,
    57,
    ImageFormat.PNG,
    "282828",
    "white",
    "LoremIpsum.com",
  );
  return (
    <FooterBottomWrapper>
      <Ul>
        <Link>
          <a href={"#"}>Lorem Ipsum</a>
        </Link>
        <Link>
          <a href={"#"}>Lorem Ipsum</a>
        </Link>
        <Link>
          <a href={"#"}>Lorem Ipsum</a>
        </Link>
        <Link>
          <a href={"#"}>Lorem Ipsum</a>
        </Link>
      </Ul>
      <FooterCreditsWrapper>
        <FooterLogoWrapper>
          <FooterLogoLink href={"#"}>
            <img src={placeHolderLogo.getUrl()} alt={"logo"} />
          </FooterLogoLink>
          <span>© 2024 Lorem ipsum dolor sit · P.Iva 123456789</span>
        </FooterLogoWrapper>
        <FooterBottomRight>
          <span>Lorem ipsum dolor sit amet, consectetur</span>
          <FooterBottomButtons>
            <Button
              $btnColor={"white"}
              $btnShadow={"whiteShadow"}
              as={"a"}
              href={"#"}
              style={{ color: "#282828" }}
            >
              Abbonati
            </Button>
            <A href={"#"}>
              Leggi online
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 7 10"
                width="7"
                height="10"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.416 5.274L.293 8.397 1.707 9.81l4.537-4.537L1.707.737.293 2.15l3.123 3.123z"
                ></path>
              </Svg>
            </A>
          </FooterBottomButtons>
        </FooterBottomRight>
      </FooterCreditsWrapper>
    </FooterBottomWrapper>
  );
}
