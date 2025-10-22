import styled from "styled-components";

const HeaderWrap = styled.header`
  background-color: #f5cac3;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: calc(2rem + 1vw);
    margin-bottom: 8px;
    margin-left: 4px;
  }
  p {
    font-size: calc(1rem + 0.3vw);
    margin-left: 4px;
  }

  @media (min-width: 751px) {
    text-align: left;
    width: 100%;
  }

  @media (max-width: 750px) {
    text-align: center;
  }
`;


export default function Header() {
  return (
    <HeaderWrap>
      <h1>Hayeon (Alexia)'s Resume</h1>
      <p>My online resume</p>
    </HeaderWrap>
  );
}
