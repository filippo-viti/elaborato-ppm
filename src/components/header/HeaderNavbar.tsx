export default function HeaderNavbar() {
  return (
    <div className={"header-nav"}>
      <HamburgerButton/>
      <NavLinks/>
      <NavRightButtons/>
    </div>
  );
}

function HamburgerButton() {
  return (
    <button className={"hamburger-button"}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list"
           viewBox="0 0 16 16">
        <path fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
    </button>
  );
}

function NavLinks() {
  return (
    <nav className={"header-links"}>
      <a href={"#"}>Lorem ipsum</a>
      <a href={"#"}>Lorem ipsum</a>
      <a href={"#"}>Lorem ipsum</a>
      <a href={"#"}>Lorem ipsum</a>
      <a href={"#"}>Lorem ipsum</a>
      <a href={"#"}>Lorem ipsum</a>
      <a href={"#"}>Lorem ipsum</a>
      <a href={"#"}>Lorem ipsum</a>
      <a href={"#"}>Lorem ipsum</a>
    </nav>
  );
}

function NavRightButtons() {
  return (
    <div className={"nav-right-buttons"}>
      <NotificationsButton/>
      <LiveButton/>
    </div>
  );
}

function NotificationsButton() {
  return (
    <button className={"notifications-button"}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell"
           viewBox="0 0 16 16">
        <path
          d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
      </svg>
    </button>
  );
}

function LiveButton() {
  return (
    <a className={"live-link"}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill"
           viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
      </svg>
      Live
    </a>
  );
}

