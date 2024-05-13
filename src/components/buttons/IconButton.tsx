import styled from "styled-components";

export const IconButton = styled.button`
  display: flex;
  color: black;
  width: 40px;
  height: 40px;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;

  > svg {
    height: 16px;
    width: 16px;
    vertical-align: middle;
  }
`;
