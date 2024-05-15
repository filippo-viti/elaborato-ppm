import styled from "styled-components";

export const Title = styled.h2<{ $titleSize: string }>`
  font-size: ${(props) => {
    switch (props.$titleSize) {
      case "big":
        return props.theme.titleSizes.big.fontSize;
      case "medium":
        return props.theme.titleSizes.medium.fontSize;
      case "small":
        return props.theme.titleSizes.small.fontSize;
      default:
        return "inherit";
    }
  }};
  line-height: ${(props) => {
    switch (props.$titleSize) {
      case "big":
        return props.theme.titleSizes.big.lineHeight;
      case "medium":
        return props.theme.titleSizes.medium.lineHeight;
      case "small":
        return props.theme.titleSizes.small.lineHeight;
      default:
        return "inherit";
    }
  }};
  margin: 0 0 1.75rem;
  font-weight: 800;
  letter-spacing: -0.03em;

  &:hover {
    text-decoration: underline;
  }
`;
