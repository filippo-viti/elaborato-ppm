import styled from "styled-components";
import Article from "./Article.tsx";

const Grid = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  row-gap: 54px;
  column-gap: 20px;
  margin-top: 3.375rem;
`;

export default function ArticleGrid({articleNumber}: { articleNumber: number }) {
  return (
    <Grid>
      {renderArticles(articleNumber)}
    </Grid>
  )
}

function renderArticles(articleNumber: number) {
  let articles =[];
  for (let i = 0; i < articleNumber; i++) {
    articles.push(<Article size={"medium"} />);
  }
  return articls;
}