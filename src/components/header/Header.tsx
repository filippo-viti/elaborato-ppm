import {HeaderTopButtons} from "./HeaderTopButtons.tsx";
import HeaderNavbar from "./HeaderNavbar.tsx";
import PlaceHolderImage from "../../utils/PlaceHolderImage.ts";
import {ImageFormat} from "../../utils/ImageFormat.ts";


export default function Header() {
  return (
    <header className={"header"}>
      <HeaderTop/>
      <HeaderNavbar/>
    </header>
  );
}

function HeaderTop() {
  return (
    <div className={"header-top"}>
      <div className={"logo-wrapper"}>
        <HeaderLogo/>
        <TodayDate/>
      </div>
      <HeaderTopButtons/>
    </div>
  );
}

function HeaderLogo() {
  const logo = new PlaceHolderImage(320, 60, ImageFormat.SVG, "FFFFFF", "FF0000", "Lorem Ipsum");
  return (
    <div className={"header-logo"}>
      <a href={'#'}>
        <img src={logo.getUrl()} alt="Logo"/>
      </a>
    </div>
  );
}

function TodayDate() {

  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString("it-IT", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const dateParts = dateString.split(' ');
  dateParts[0] = capitalizeFirstLetter(dateParts[0]); // Capitalize the weekday
  dateParts[2] = capitalizeFirstLetter(dateParts[2]); // Capitalize the month

  const todayDate = dateParts.join(' ');

  return (
    <div className={"header-date"}>
      <time>
        {todayDate}
      </time>
    </div>
  );

}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}