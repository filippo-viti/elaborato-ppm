import styled from "styled-components";

export const Button = styled.button<{ $btnColor: string; $btnShadow: string }>`
  display: inline-block;
  padding: 12px 10px;
  font-weight: bold;
  font-size: 10px;
  font-family: inherit;
  color: white;
  background-color: ${(props) => props.theme.colors[props.$btnColor]};
  border: 1px solid ${(props) => props.theme.colors[props.$btnColor]};
  position: relative;
  margin-right: 0.75rem;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors[props.$btnShadow]};
  }
`;
