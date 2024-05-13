export default function MainArticle() {
  return (
    <article>
      <ArticleMeta />
      <ArticleTitle />
    </article>
  );
}

function ArticleMeta() {
  const todayDate = new Date();
  return (
    <div>
      <div>About</div>
      <div>
        <div>Author</div>
        <div>{todayDate.toLocaleDateString()}</div>
      </div>
    </div>
  );
}

function ArticleTitle() {
  return (
    <h1>
      <a href={"#"}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum
        imperdiet mi.
      </a>
    </h1>
  );
}
