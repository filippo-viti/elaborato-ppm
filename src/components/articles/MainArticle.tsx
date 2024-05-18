import styled from "styled-components";
import { ArticleMeta } from "./ArticleMeta.tsx";

const Article = styled.article`
  display: block;
  padding-bottom: 2rem;
`;

export default function MainArticle() {
  return (
    <Article>
      <ArticleMeta color={"blue"} />
      <ArticleTitle />
    </Article>
  );
}

const Heading = styled.h1`
  margin: 0;
  font-weight: 800;
  font-size: 3.5rem;
  @media screen and (max-width: 1023px) {
      font-size: 2.5rem;
  }
  letter-spacing: -0.035em;
  line-height: 1.2;

  &:hover {
    text-decoration: underline;
  }
`;

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
