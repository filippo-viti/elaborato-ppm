import styled from "styled-components";

const StyledArticleMeta = styled.div`
  margin: 0 0 0.6rem;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.05;
  max-width: 100%;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
`;
const About = styled.div<{ $color: string }>`
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  color: ${(props) => props.theme[props.$color]};
  margin: 0 1rem 0.2rem 0;
  line-height: 1.05;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`;
const DateTimeWrapper = styled.div`
  color: ${(props) => props.theme.gray};
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 0.5rem;
`;
const BoldDate = styled.span`
  font-weight: 900;
`;

export function ArticleMeta({ color }: { color: string }) {
  const todayDate = new Date();
  return (
    <StyledArticleMeta>
      <About $color={color}>
        <span>Lorem ipsum</span>
      </About>
      <DateTimeWrapper>
        <time>
          <BoldDate>{todayDate.toLocaleDateString()}</BoldDate>{" "}
          {todayDate.toLocaleTimeString()}
        </time>
      </DateTimeWrapper>
    </StyledArticleMeta>
  );
}
