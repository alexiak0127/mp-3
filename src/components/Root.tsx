import { Routes, Route } from "react-router";
import { GlobalStyle } from './GlobalStyle.tsx';
import styled from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "../pages/Home";
import Credits from "../pages/Credits";
import Skills from "../pages/Skills";
import Certs from "../pages/Certs";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Education from "../pages/Education";


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: 100vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media screen and (min-width: 751px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;

/** #wrapper from CSS media queries */
const Wrapper = styled.div`
  /* default mobile stack */
  @media (min-width: 751px) {
    display: flex; /* .container > #wrapper flex on >=751px */
  }
`;

const Main = styled.main`
  min-height: 100vh;
  padding: 20px;

  ul {
    margin: 15px 0;
    padding-left: 20px;
  }
  li {
    margin-bottom: 8px;
    line-height: 1.6;
  }
  h2 {
    color: #000000;
    font-size: 28px;
    margin-bottom: 20px;
    border-bottom: 2px solid #f5cac3;
    padding-bottom: 10px;
  }
  h3 {
    color: #000000;
    font-size: 22px;
    margin-top: 25px;
    margin-bottom: 10px;
  }
  h4 {
    color: #000000;
    font-size: 18px;
    margin-bottom: 5px;
  }

  @media (min-width: 751px) {
    width: 70%;
  }
  @media (min-width: 1001px) {
    max-width: 70%;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export default function Root() {
  return (
    <>
    <GlobalStyle />
      <Container>
        <Header />
        <Wrapper>
          <Nav />
          <Main>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/certs" element={<Certs />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                </Routes>
            </Main>
        </Wrapper>
        <Footer />
      </Container>
      </>
  );
}