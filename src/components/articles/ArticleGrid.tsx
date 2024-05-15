import styled from "styled-components";
import Article from "./Article.tsx";

const Grid = styled.div<{ $rowSize: number }>`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: ${(props) => " minmax(0, 1fr)".repeat(props.$rowSize)};
  row-gap: 54px;
  column-gap: 20px;
  margin-top: 3.375rem;
`;

export default function ArticleGrid({
  articleNumber,
  rowSize,
}: {
  articleNumber: number;
  rowSize: number;
}) {
  return <Grid $rowSize={rowSize}>{renderArticles(articleNumber)}</Grid>;
}

function renderArticles(articleNumber: number) {
  const articles = [];
  for (let i = 0; i < articleNumber; i++) {
    articles.push(<Article key={i} size={"medium"} />);
  }
  return articles;
}