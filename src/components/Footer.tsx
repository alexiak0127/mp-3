import { Link } from "react-router";
import styled from "styled-components";

const Foot = styled.footer`
  background-color: #f5cac3;
  padding: 20px;
  text-align: center;
  padding-bottom: 64px;

  a {
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <Foot>
      <p>
        All rights reserved by Alexia Kim <Link to="/credits">Credits</Link> &copy;
      </p>
    </Foot>
  );
}
