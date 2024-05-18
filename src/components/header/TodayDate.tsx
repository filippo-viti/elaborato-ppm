import styled from "styled-components";

const StyledDate = styled.div`
  font-size: 10px;
  font-weight: bold;
  @media screen and (max-width: 1023px){
    display: none;
  }
`;

export default function TodayDate() {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString("it-IT", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dateParts = dateString.split(" ");
  dateParts[0] = capitalizeFirstLetter(dateParts[0]); // Capitalize the weekday
  dateParts[2] = capitalizeFirstLetter(dateParts[2]); // Capitalize the month

  const todayDate = dateParts.join(" ");

  return (
    <StyledDate>
      <time>{todayDate}</time>
    </StyledDate>
  );
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
