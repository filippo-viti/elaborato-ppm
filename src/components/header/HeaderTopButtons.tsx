function SubscribeButton() {
  return <a className={"subscribe-button"} href={"#"}>Abbonati</a>;
}

function ReadNewsPaperButton() {
  return <a className={"read-newspaper-button"} href={"#"}>Leggi il giornale</a>;
}

function SearchButton() {
  return <button className={"search-button"}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search"
         viewBox="0 0 16 16">
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
    </svg>
  </button>;
}

function ProfileButton() {
  return <button className={"profile-button"}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill"
         viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  </button>;
}

export function HeaderTopButtons() {
  return (
    <div className={"header-top-buttons"}>
      <SubscribeButton/>
      <ReadNewsPaperButton/>
      <SearchButton/>
      <ProfileButton/>
    </div>
  );
}