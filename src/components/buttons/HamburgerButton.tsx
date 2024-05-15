import { IconButton } from "./IconButton.tsx";

export function HamburgerButton() {
  return (
    <IconButton>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
        <path d="M0 12h24v2H0zM0 6h24v2H0zM0 0h24v2H0z"></path>
      </svg>
    </IconButton>
  );
}
