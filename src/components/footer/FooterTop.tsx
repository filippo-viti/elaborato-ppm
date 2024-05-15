import styled from "styled-components";
import { SectionHeader } from "../articles/SectionHeader.tsx";

const Nav = styled.nav`
  padding-top: 55px;
  padding-bottom: 20px;
  display: flex;
`;
const NavColumn = styled.div`
  flex: 0 0 16.6666666667%;
  width: 16.6666666667%;
`;
const ColumnHeader = styled(SectionHeader)`
  margin-top: 1rem;
  padding: 2rem 0 0.125rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  position: relative;

  > h2 {
    color: white;
    background-color: transparent;
    font-size: 18px !important;
    border: none;
    box-shadow: 0 0 0 0 !important;
    padding: 0;
  }
`;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const Link = styled.li`
  margin-bottom: 0.5rem;

  > a {
    font-size: 14px;
    line-height: 16px;
    color: white;
  }

  > a:hover {
    text-decoration: underline;
  }
`;

export function FooterTop() {
  return <Nav>{renderColumns()}</Nav>;
}

function renderColumns() {
  const columns = [];
  for (let i = 0; i < 6; i++) {
    columns.push(
      <NavColumn key={i}>
        <ColumnHeader $bgColor={"black"}>
          <h2>Lorem Ipsum</h2>
        </ColumnHeader>
        <Ul>
          <Link>
            <a href={"#"}>Lorem Ipsum</a>
          </Link>
          <Link>
            <a href={"#"}>Lorem Ipsum</a>
          </Link>
          <Link>
            <a href={"#"}>Lorem Ipsum</a>
          </Link>
          <Link>
            <a href={"#"}>Lorem Ipsum</a>
          </Link>
          <Link>
            <a href={"#"}>Lorem Ipsum</a>
          </Link>
          <Link>
            <a href={"#"}>Lorem Ipsum</a>
          </Link>
          <Link>
            <a href={"#"}>Lorem Ipsum</a>
          </Link>
        </Ul>
      </NavColumn>,
    );
  }
  return columns;
}
