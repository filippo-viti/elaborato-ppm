import styled from "styled-components";

const Article = styled.article`
  display: block;
  padding-bottom: 2rem;
`;

const StyledArticleMeta = styled.div`
  margin: 1rem 0 0.6rem;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.05;
  max-width: 100%;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
`;

const About = styled.div`
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  color: #4984b8;
  margin: 0.5rem 0.5rem 0 0;
  line-height: 1.05;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`;

const DateTimeWrapper = styled.div`
  color: #aaaaaa;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 0.5rem;
`;

export default function MainArticle() {
  return (
    <Article>
      <ArticleMeta />
      <ArticleTitle />
    </Article>
  );
}

const BoldDate = styled.span`
  font-weight: 900;
`;

const Heading = styled.h1`
  margin: 0;
  font-weight: 800;
  font-size: 3.5rem;
  letter-spacing: -0.035em;
  line-height: 1.2;

  &:hover {
    text-decoration: underline;
  }
`;

function ArticleMeta() {
  const todayDate = new Date();
  return (
    <StyledArticleMeta>
      <About>
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

function ArticleTitle() {
  return (
    <Heading>
      <a href={"#"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum
        imperdiet mi.
      </a>
    </Heading>
  );
}
