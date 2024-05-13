import styled from "styled-components";

export const Button = styled.button<{ $btnColor: string; $btnHover: string }>`
  display: inline-block;
  padding: 12px 10px;
  font-weight: bold;
  font-size: 10px;
  font-family: inherit;
  color: white;
  background-color: ${(props) => props.$btnColor};
  border: 1px solid ${(props) => props.$btnColor};
  position: relative;
  margin-right: 0.75rem;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 3px ${(props) => props.$btnHover};
  }
`;
