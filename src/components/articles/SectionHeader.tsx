import styled from "styled-components";

export const SectionHeader = styled.header<{ $bgColor: string }>`
  margin-top: 1.3rem !important;
  padding: 0 !important;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  position: relative;

  > h2 {
    display: inline-block;
    padding: 6px 12px;
    position: relative;
    text-transform: uppercase;
    margin-right: 1rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 900;
    font-size: 16px;
    line-height: 18px;
    color: white;
    transform: matrix(1, -0.05, 0, 1, 0, 0);
    box-sizing: border-box;
    box-shadow:
      2px 2px 0 white,
      8px 8px 12px rgba(0, 0, 0, 0.1);
    background-color: ${(props) =>
      props.theme.colors[props.$bgColor]} !important;
  }
`;
