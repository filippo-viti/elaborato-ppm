import styled from "styled-components";
import { Button } from "../buttons/Button.tsx";

// TODO: refactor this

const Container = styled.aside`
  margin: 0 -14px;
  padding: 0 14px 2rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const Heading = styled.h2`
  font-weight: 900;
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 0;
  margin-right: 1rem;
  margin-top: 0;
  white-space: nowrap;

  > a {
    color: ${(props) => props.theme.colors.orange};
  }
`;

const SVG = styled.svg`
  fill: currentcolor;
  margin-left: 0.25rem;
  vertical-align: middle;
`;

const ButtonGroup = styled.div`
  line-height: 3;

  > button {
    padding: 4px 6px;
    font-size: 12px;
  }
`;

const LiveMatchesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  list-style: none;
`;

const Team = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding: 5px;
`;

const Match = styled.div<{ $status?: string }>`
  width: calc(180px + 0.25rem);
  margin-right: 8px;

  --ongoing: #47c072;
  --scheduled: #666;
  --ended: #fa4224;

  ${Team} {
    border-left: 1px solid var(--${(props) => props.$status});
  }
`;

const LiveTime = styled.div<{ $status?: string }>`
  color: var(--${(props) => props.$status});
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  margin-top: 0.25rem;
`;

export default function LiveTracker() {
  return (
    <Container>
      <Header>
        <Heading>
          <LiveResultsLink />
        </Heading>
        <TabSwitchButtons />
      </Header>
      <LiveMatchesContainer>
        <Matches />
      </LiveMatchesContainer>
    </Container>
  );
}

function Matches() {
  const matches = [
    {
      id: "1",
      teams: [
        {
          teamName: "Lorem",
          score: 0,
        },
        {
          teamName: "Ipsum",
          score: 0,
        },
      ],
      status: "ongoing",
      minute: 64,
      half: 2,
    },
    {
      id: "2",
      teams: [
        {
          teamName: "Lorem",
          score: 0,
        },
        {
          teamName: "Ipsum",
          score: 0,
        },
      ],
      status: "scheduled",
      date: "13.05.2025",
      time: "20:45",
    },
  ];
  // TODO: aggiungere stemma squadre
  const listItems = matches.map((match) => (
    <Match key={match.id} $status={match.status}>
      <Team>
        <span>{match.teams[0].teamName}</span>
        <span>{match.teams[0].score}</span>
      </Team>
      <Team>
        <span>{match.teams[1].teamName}</span>
        <span>{match.teams[1].score}</span>
      </Team>
      <LiveTime $status={match.status}>{renderLiveTime(match)}</LiveTime>
    </Match>
  ));
  return <>{listItems}</>;
}

function LiveResultsLink() {
  return (
    <a href={"#"}>
      {" "}
      Live
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7 10"
        width="7"
        height="10"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.416 5.274L.293 8.397 1.707 9.81l4.537-4.537L1.707.737.293 2.15l3.123 3.123z"
        ></path>
      </SVG>
    </a>
  );
}

function TabSwitchButtons() {
  return (
    <ButtonGroup>
      <Button $btnColor={"orange"} $btnShadow={"orangeShadow"}>
        Serie A
      </Button>
      <Button $btnColor={"orange"} $btnShadow={"orangeShadow"}>
        Premier
      </Button>
      <Button $btnColor={"orange"} $btnShadow={"orangeShadow"}>
        Liga
      </Button>
      <Button $btnColor={"orange"} $btnShadow={"orangeShadow"}>
        Le gare di ieri
      </Button>
    </ButtonGroup>
  );
}

function renderLiveTime(match: {
  status: string;
  minute?: number;
  half?: number;
  date?: string;
  time?: string;
}) {
  switch (match.status) {
    case "ongoing":
      return `${match.minute}' ${match.half == 1 ? "1 tempo" : "2 tempo"}`;
    case "scheduled":
      return `${match.date} ${match.time}`;
    case "ended":
      return "Finita";
  }
}
